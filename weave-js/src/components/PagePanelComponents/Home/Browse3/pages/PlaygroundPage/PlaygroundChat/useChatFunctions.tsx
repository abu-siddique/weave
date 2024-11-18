import {cloneDeep} from 'lodash';
import {SetStateAction} from 'react';

import {Choice, Message} from '../../ChatView/types';
import {OptionalTraceCallSchema, PlaygroundState} from '../types';
import {DEFAULT_SYSTEM_MESSAGE} from '../usePlaygroundState';
type TraceCallOutput = {
  choices?: any[];
};

export type SetPlaygroundStateFieldFunctionType = (
  index: number,
  field: keyof PlaygroundState,
  // The value here is a function that returns a PlaygroundState field
  value: SetStateAction<PlaygroundState[keyof PlaygroundState]>
) => void;

export const useChatFunctions = (
  setPlaygroundStateField: SetPlaygroundStateFieldFunctionType
) => {
  const deleteMessage = (
    callIndex: number,
    messageIndex: number,
    responseIndexes?: number[]
  ) => {
    setPlaygroundStateField(callIndex, 'traceCall', prevTraceCall => {
      const newTraceCall = clearTraceCall(
        cloneDeep(prevTraceCall as OptionalTraceCallSchema)
      );
      if (newTraceCall && newTraceCall.inputs?.messages) {
        // Remove the message and all responses to it
        newTraceCall.inputs.messages = newTraceCall.inputs.messages.filter(
          (_: any, index: number) =>
            index !== messageIndex && !responseIndexes?.includes(index)
        );

        // If there are no messages left, add a system message
        if (newTraceCall.inputs.messages.length === 0) {
          newTraceCall.inputs.messages = [DEFAULT_SYSTEM_MESSAGE];
        }
      }
      return newTraceCall;
    });
  };

  const editMessage = (
    callIndex: number,
    messageIndex: number,
    newMessage: Message
  ) => {
    setPlaygroundStateField(callIndex, 'traceCall', prevTraceCall => {
      const newTraceCall = clearTraceCall(
        cloneDeep(prevTraceCall as OptionalTraceCallSchema)
      );
      if (newTraceCall && newTraceCall.inputs?.messages) {
        // Replace the message
        newTraceCall.inputs.messages[messageIndex] = newMessage;
      }
      return newTraceCall;
    });
  };

  const addMessage = (callIndex: number, newMessage: Message) => {
    setPlaygroundStateField(callIndex, 'traceCall', prevTraceCall => {
      const newTraceCall = clearTraceCall(
        cloneDeep(prevTraceCall as OptionalTraceCallSchema)
      );
      if (newTraceCall && newTraceCall.inputs?.messages) {
        if (
          newTraceCall.output &&
          (newTraceCall.output as TraceCallOutput).choices &&
          Array.isArray((newTraceCall.output as TraceCallOutput).choices)
        ) {
          // Add all the choices as messages
          (newTraceCall.output as TraceCallOutput).choices!.forEach(
            (choice: any) => {
              if (choice.message) {
                newTraceCall.inputs!.messages.push(choice.message);
              }
            }
          );
          // Set the choices to undefined
          (newTraceCall.output as TraceCallOutput).choices = undefined;
        }
        // Add the new message
        newTraceCall.inputs.messages.push(newMessage);
      }
      return newTraceCall;
    });
  };

  const deleteChoice = (callIndex: number, choiceIndex: number) => {
    setPlaygroundStateField(callIndex, 'traceCall', prevTraceCall => {
      const newTraceCall = clearTraceCall(
        cloneDeep(prevTraceCall as OptionalTraceCallSchema)
      );
      const output = newTraceCall?.output as TraceCallOutput;
      if (output && Array.isArray(output.choices)) {
        // Remove the choice
        output.choices.splice(choiceIndex, 1);
        if (newTraceCall) {
          newTraceCall.output = output;
        }
      }
      return newTraceCall;
    });
  };

  const editChoice = (
    callIndex: number,
    choiceIndex: number,
    newChoice: Choice
  ) => {
    setPlaygroundStateField(callIndex, 'traceCall', prevTraceCall => {
      const newTraceCall = clearTraceCall(
        cloneDeep(prevTraceCall as OptionalTraceCallSchema)
      );
      if (
        newTraceCall?.output &&
        Array.isArray((newTraceCall.output as TraceCallOutput).choices)
      ) {
        // Delete the old choice
        (newTraceCall.output as TraceCallOutput).choices!.splice(
          choiceIndex,
          1
        );

        // Add the new choice as a message
        newTraceCall.inputs = newTraceCall.inputs ?? {};
        newTraceCall.inputs.messages = newTraceCall.inputs.messages ?? [];
        newTraceCall.inputs.messages.push({
          role: 'assistant',
          content: newChoice.message?.content,
        });
      }
      return newTraceCall;
    });
  };

  return {
    deleteMessage,
    editMessage,
    addMessage,
    deleteChoice,
    editChoice,
  };
};

export const clearTraceCall = (traceCall: OptionalTraceCallSchema) => {
  if (traceCall) {
    traceCall.id = '';
    traceCall.summary = undefined;
  }
  return traceCall;
};
