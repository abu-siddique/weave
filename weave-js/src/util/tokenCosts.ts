// costs are from https://github.com/AgentOps-AI/tokencost/blob/main/tokencost/model_prices.json on Aug 5, 2024
// costs are in USD
// costs are per token * 1000
export const LLM_TOKEN_COSTS = {
  default: {input: 0.005, output: 0.015},
  'gpt-4': {input: 0.03, output: 0.06},
  'gpt-4o': {input: 0.005, output: 0.015},
  'gpt-4o-mini': {input: 0.00015, output: 0.0006},
  'gpt-4o-mini-2024-07-18': {input: 0.00015, output: 0.0006},
  'gpt-4o-2024-05-13': {input: 0.005, output: 0.015},
  'gpt-4-turbo-preview': {input: 0.01, output: 0.03},
  'gpt-4-0314': {input: 0.03, output: 0.06},
  'gpt-4-0613': {input: 0.03, output: 0.06},
  'gpt-4-32k': {input: 0.06, output: 0.12},
  'gpt-4-32k-0314': {input: 0.06, output: 0.12},
  'gpt-4-32k-0613': {input: 0.06, output: 0.12},
  'gpt-4-turbo': {input: 0.01, output: 0.03},
  'gpt-4-turbo-2024-04-09': {input: 0.01, output: 0.03},
  'gpt-4-1106-preview': {input: 0.01, output: 0.03},
  'gpt-4-0125-preview': {input: 0.01, output: 0.03},
  'gpt-4-vision-preview': {input: 0.01, output: 0.03},
  'gpt-4-1106-vision-preview': {input: 0.01, output: 0.03},
  'gpt-3.5-turbo': {input: 0.0015, output: 0.002},
  'gpt-3.5-turbo-0301': {input: 0.0015, output: 0.002},
  'gpt-3.5-turbo-0613': {input: 0.0015, output: 0.002},
  'gpt-3.5-turbo-1106': {input: 0.001, output: 0.002},
  'gpt-3.5-turbo-0125': {input: 0.0005, output: 0.0015},
  'gpt-3.5-turbo-16k': {input: 0.003, output: 0.004},
  'gpt-3.5-turbo-16k-0613': {input: 0.003, output: 0.004},
  'ft:gpt-3.5-turbo': {input: 0.003, output: 0.006},
  'ft:gpt-4-0613': {input: 0.03, output: 0.06},
  'ft:gpt-4o-2024-05-13': {input: 0.005, output: 0.015},
  'ft:davinci-002': {input: 0.002, output: 0.002},
  'ft:babbage-002': {input: 0.0004, output: 0.0004},
  'text-embedding-3-large': {input: 0.00013, output: 0.0},
  'text-embedding-3-small': {input: 2e-5, output: 0.0},
  'text-embedding-ada-002': {input: 0.0001, output: 0.0},
  'text-embedding-ada-002-v2': {input: 0.0001, output: 0.0},
  'text-moderation-stable': {input: 0.0, output: 0.0},
  'text-moderation-007': {input: 0.0, output: 0.0},
  'text-moderation-latest': {input: 0.0, output: 0.0},
  'azure/gpt-4o': {input: 0.005, output: 0.015},
  'azure/gpt-4-turbo-2024-04-09': {input: 0.01, output: 0.03},
  'azure/gpt-4-0125-preview': {input: 0.01, output: 0.03},
  'azure/gpt-4-1106-preview': {input: 0.01, output: 0.03},
  'azure/gpt-4-0613': {input: 0.03, output: 0.06},
  'azure/gpt-4-32k-0613': {input: 0.06, output: 0.12},
  'azure/gpt-4-32k': {input: 0.06, output: 0.12},
  'azure/gpt-4': {input: 0.03, output: 0.06},
  'azure/gpt-4-turbo': {input: 0.01, output: 0.03},
  'azure/gpt-4-turbo-vision-preview': {input: 0.01, output: 0.03},
  'azure/gpt-35-turbo-16k-0613': {input: 0.003, output: 0.004},
  'azure/gpt-35-turbo-1106': {input: 0.001, output: 0.002},
  'azure/gpt-35-turbo-0125': {input: 0.0005, output: 0.0015},
  'azure/gpt-35-turbo-16k': {input: 0.003, output: 0.004},
  'azure/gpt-35-turbo': {input: 0.0005, output: 0.0015},
  'azure/gpt-3.5-turbo-instruct-0914': {input: 0.0015, output: 0.002},
  'azure/gpt-35-turbo-instruct': {input: 0.0015, output: 0.002},
  'azure/mistral-large-latest': {input: 0.008, output: 0.024},
  'azure/mistral-large-2402': {input: 0.008, output: 0.024},
  'azure/command-r-plus': {input: 0.003, output: 0.015},
  'azure/ada': {input: 0.0001, output: 0.0},
  'azure/text-embedding-ada-002': {input: 0.0001, output: 0.0},
  'azure/text-embedding-3-large': {input: 0.00013, output: 0.0},
  'azure/text-embedding-3-small': {input: 2e-5, output: 0.0},
  'azure_ai/jamba-instruct': {input: 0.0005, output: 0.0007},
  'azure_ai/mistral-large': {input: 0.004, output: 0.012},
  'azure_ai/mistral-small': {input: 0.001, output: 0.003},
  'azure_ai/Meta-Llama-3-70B-Instruct': {input: 0.0011, output: 0.00037},
  'azure_ai/Meta-Llama-31-8B-Instruct': {input: 0.0003, output: 0.00061},
  'azure_ai/Meta-Llama-31-70B-Instruct': {input: 0.00268, output: 0.00354},
  'azure_ai/Meta-Llama-31-405B-Instruct': {input: 0.00533, output: 0.016},
  'babbage-002': {input: 0.0004, output: 0.0004},
  'davinci-002': {input: 0.002, output: 0.002},
  'gpt-3.5-turbo-instruct': {input: 0.0015, output: 0.002},
  'gpt-3.5-turbo-instruct-0914': {input: 0.0015, output: 0.002},
  'claude-instant-1': {input: 0.00163, output: 0.00551},
  'mistral/mistral-tiny': {input: 0.00025, output: 0.00025},
  'mistral/mistral-small': {input: 0.001, output: 0.003},
  'mistral/mistral-small-latest': {input: 0.001, output: 0.003},
  'mistral/mistral-medium': {input: 0.0027, output: 0.0081},
  'mistral/mistral-medium-latest': {input: 0.0027, output: 0.0081},
  'mistral/mistral-medium-2312': {input: 0.0027, output: 0.0081},
  'mistral/mistral-large-latest': {input: 0.003, output: 0.009},
  'mistral/mistral-large-2402': {input: 0.004, output: 0.012},
  'mistral/mistral-large-2407': {input: 0.003, output: 0.009},
  'mistral/open-mistral-7b': {input: 0.00025, output: 0.00025},
  'mistral/open-mixtral-8x7b': {input: 0.0007, output: 0.0007},
  'mistral/open-mixtral-8x22b': {input: 0.002, output: 0.006},
  'mistral/codestral-latest': {input: 0.001, output: 0.003},
  'mistral/codestral-2405': {input: 0.001, output: 0.003},
  'mistral/open-mistral-nemo': {input: 0.0003, output: 0.0003},
  'mistral/open-mistral-nemo-2407': {input: 0.0003, output: 0.0003},
  'mistral/open-codestral-mamba': {input: 0.00025, output: 0.00025},
  'mistral/codestral-mamba-latest': {input: 0.00025, output: 0.00025},
  'deepseek-chat': {input: 0.00014, output: 0.00028},
  'codestral/codestral-latest': {input: 0.0, output: 0.0},
  'codestral/codestral-2405': {input: 0.0, output: 0.0},
  'text-completion-codestral/codestral-latest': {input: 0.0, output: 0.0},
  'text-completion-codestral/codestral-2405': {input: 0.0, output: 0.0},
  'deepseek-coder': {input: 0.00014, output: 0.00028},
  'groq/llama2-70b-4096': {input: 0.0007, output: 0.0008},
  'groq/llama3-8b-8192': {input: 5e-5, output: 8e-5},
  'groq/llama3-70b-8192': {input: 0.00059, output: 0.00079},
  'groq/llama-3.1-8b-instant': {input: 0.00059, output: 0.00079},
  'groq/llama-3.1-70b-versatile': {input: 0.00059, output: 0.00079},
  'groq/llama-3.1-405b-reasoning': {input: 0.00059, output: 0.00079},
  'groq/mixtral-8x7b-32768': {input: 0.00024, output: 0.00024},
  'groq/gemma-7b-it': {input: 7e-5, output: 7e-5},
  'groq/llama3-groq-70b-8192-tool-use-preview': {
    input: 0.00089,
    output: 0.00089,
  },
  'groq/llama3-groq-8b-8192-tool-use-preview': {
    input: 0.00019,
    output: 0.00019,
  },
  'friendliai/mixtral-8x7b-instruct-v0-1': {input: 0.0004, output: 0.0004},
  'friendliai/meta-llama-3-8b-instruct': {input: 0.0001, output: 0.0001},
  'friendliai/meta-llama-3-70b-instruct': {input: 0.0008, output: 0.0008},
  'claude-instant-1.2': {input: 0.000163, output: 0.000551},
  'claude-2': {input: 0.008, output: 0.024},
  'claude-2.1': {input: 0.008, output: 0.024},
  'claude-3-haiku-20240307': {input: 0.00025, output: 0.00125},
  'claude-3-opus-20240229': {input: 0.015, output: 0.075},
  'claude-3-sonnet-20240229': {input: 0.003, output: 0.015},
  'claude-3-5-sonnet-20240620': {input: 0.003, output: 0.015},
  'text-bison32k': {input: 0.000125, output: 0.000125},
  'text-bison32k@002': {input: 0.000125, output: 0.000125},
  'text-unicorn': {input: 0.01, output: 0.028},
  'text-unicorn@001': {input: 0.01, output: 0.028},
  'chat-bison': {input: 0.000125, output: 0.000125},
  'chat-bison@001': {input: 0.000125, output: 0.000125},
  'chat-bison@002': {input: 0.000125, output: 0.000125},
  'chat-bison-32k': {input: 0.000125, output: 0.000125},
  'chat-bison-32k@002': {input: 0.000125, output: 0.000125},
  'code-bison': {input: 0.000125, output: 0.000125},
  'code-bison@001': {input: 0.000125, output: 0.000125},
  'code-bison@002': {input: 0.000125, output: 0.000125},
  'code-bison32k': {input: 0.000125, output: 0.000125},
  'code-bison-32k@002': {input: 0.000125, output: 0.000125},
  'code-gecko@001': {input: 0.000125, output: 0.000125},
  'code-gecko@002': {input: 0.000125, output: 0.000125},
  'code-gecko': {input: 0.000125, output: 0.000125},
  'code-gecko-latest': {input: 0.000125, output: 0.000125},
  'codechat-bison@latest': {input: 0.000125, output: 0.000125},
  'codechat-bison': {input: 0.000125, output: 0.000125},
  'codechat-bison@001': {input: 0.000125, output: 0.000125},
  'codechat-bison@002': {input: 0.000125, output: 0.000125},
  'codechat-bison-32k': {input: 0.000125, output: 0.000125},
  'codechat-bison-32k@002': {input: 0.000125, output: 0.000125},
  'gemini-pro': {input: 0.0005, output: 0.0015},
  'gemini-1.0-pro': {input: 0.0005, output: 0.0015},
  'gemini-1.0-pro-001': {input: 0.0005, output: 0.0015},
  'gemini-1.0-ultra': {input: 0.0005, output: 0.0015},
  'gemini-1.0-ultra-001': {input: 0.0005, output: 0.0015},
  'gemini-1.0-pro-002': {input: 0.0005, output: 0.0015},
  'gemini-1.5-pro': {input: 0.005, output: 0.015},
  'gemini-1.5-pro-001': {input: 0.005, output: 0.015},
  'gemini-1.5-pro-preview-0514': {input: 0.005, output: 0.015},
  'gemini-1.5-pro-preview-0215': {input: 0.005, output: 0.015},
  'gemini-1.5-pro-preview-0409': {input: 0.005, output: 0.015},
  'gemini-1.5-flash': {input: 0.0005, output: 0.0015},
  'gemini-1.5-flash-001': {input: 0.0005, output: 0.0015},
  'gemini-1.5-flash-preview-0514': {input: 0.0005, output: 0.0015},
  'gemini-experimental': {input: 0.0, output: 0.0},
  'gemini-pro-vision': {input: 0.00025, output: 0.0005},
  'gemini-1.0-pro-vision': {input: 0.00025, output: 0.0005},
  'gemini-1.0-pro-vision-001': {input: 0.00025, output: 0.0005},
  'vertex_ai/claude-3-sonnet@20240229': {input: 0.003, output: 0.015},
  'vertex_ai/claude-3-5-sonnet@20240620': {input: 0.003, output: 0.015},
  'vertex_ai/claude-3-haiku@20240307': {input: 0.00025, output: 0.00125},
  'vertex_ai/claude-3-opus@20240229': {input: 0.015, output: 0.075},
  'vertex_ai/meta/llama3-405b-instruct-maas': {input: 0.0, output: 0.0},
  'text-embedding-004': {input: 6.25e-6, output: 0.0},
  'text-multilingual-embedding-002': {input: 6.25e-6, output: 0.0},
  'textembedding-gecko': {input: 6.25e-6, output: 0.0},
  'textembedding-gecko-multilingual': {input: 6.25e-6, output: 0.0},
  'textembedding-gecko-multilingual@001': {input: 6.25e-6, output: 0.0},
  'textembedding-gecko@001': {input: 6.25e-6, output: 0.0},
  'textembedding-gecko@003': {input: 6.25e-6, output: 0.0},
  'text-embedding-preview-0409': {input: 6.25e-6, output: 0.0},
  'text-multilingual-embedding-preview-0409': {input: 6.25e-6, output: 0.0},
  'palm/chat-bison': {input: 0.000125, output: 0.000125},
  'palm/chat-bison-001': {input: 0.000125, output: 0.000125},
  'palm/text-bison': {input: 0.000125, output: 0.000125},
  'palm/text-bison-001': {input: 0.000125, output: 0.000125},
  'palm/text-bison-safety-off': {input: 0.000125, output: 0.000125},
  'palm/text-bison-safety-recitation-off': {
    input: 0.000125,
    output: 0.000125,
  },
  'gemini/gemini-1.5-flash': {input: 0.00035, output: 0.00105},
  'gemini/gemini-1.5-flash-latest': {input: 0.00035, output: 0.00105},
  'gemini/gemini-pro': {input: 0.00035, output: 0.00105},
  'gemini/gemini-1.5-pro': {input: 0.0035, output: 0.0105},
  'gemini/gemini-1.5-pro-latest': {input: 0.0035, output: 0.00105},
  'gemini/gemini-pro-vision': {input: 0.00035, output: 0.00105},
  'gemini/gemini-gemma-2-27b-it': {input: 0.00035, output: 0.00105},
  'gemini/gemini-gemma-2-9b-it': {input: 0.00035, output: 0.00105},
  'command-r': {input: 0.0005, output: 0.0015},
  'command-light': {input: 0.015, output: 0.015},
  'command-r-plus': {input: 0.003, output: 0.015},
  'command-nightly': {input: 0.015, output: 0.015},
  command: {input: 0.015, output: 0.015},
  'command-medium-beta': {input: 0.015, output: 0.015},
  'command-xlarge-beta': {input: 0.015, output: 0.015},
  'replicate/meta/llama-2-13b': {input: 0.0001, output: 0.0005},
  'replicate/meta/llama-2-13b-chat': {input: 0.0001, output: 0.0005},
  'replicate/meta/llama-2-70b': {input: 0.00065, output: 0.00275},
  'replicate/meta/llama-2-70b-chat': {input: 0.00065, output: 0.00275},
  'replicate/meta/llama-2-7b': {input: 5e-5, output: 0.00025},
  'replicate/meta/llama-2-7b-chat': {input: 5e-5, output: 0.00025},
  'replicate/meta/llama-3-70b': {input: 0.00065, output: 0.00275},
  'replicate/meta/llama-3-70b-instruct': {input: 0.00065, output: 0.00275},
  'replicate/meta/llama-3-8b': {input: 5e-5, output: 0.00025},
  'replicate/meta/llama-3-8b-instruct': {input: 5e-5, output: 0.00025},
  'replicate/mistralai/mistral-7b-v0.1': {input: 5e-5, output: 0.00025},
  'replicate/mistralai/mistral-7b-instruct-v0.2': {
    input: 5e-5,
    output: 0.00025,
  },
  'replicate/mistralai/mixtral-8x7b-instruct-v0.1': {
    input: 0.0003,
    output: 0.001,
  },
  'openrouter/deepseek/deepseek-coder': {input: 0.00014, output: 0.00028},
  'openrouter/microsoft/wizardlm-2-8x22b:nitro': {
    input: 0.001,
    output: 0.001,
  },
  'openrouter/google/gemini-pro-1.5': {input: 0.0025, output: 0.0075},
  'openrouter/mistralai/mixtral-8x22b-instruct': {
    input: 0.00065,
    output: 0.00065,
  },
  'openrouter/cohere/command-r-plus': {input: 0.003, output: 0.015},
  'openrouter/databricks/dbrx-instruct': {input: 0.0006, output: 0.0006},
  'openrouter/anthropic/claude-3-haiku': {input: 0.00025, output: 0.00125},
  'openrouter/anthropic/claude-3-haiku-20240307': {
    input: 0.00025,
    output: 0.00125,
  },
  'openrouter/anthropic/claude-3.5-sonnet': {input: 0.003, output: 0.015},
  'openrouter/anthropic/claude-3-sonnet': {input: 0.003, output: 0.015},
  'openrouter/mistralai/mistral-large': {input: 0.008, output: 0.024},
  'openrouter/cognitivecomputations/dolphin-mixtral-8x7b': {
    input: 0.0005,
    output: 0.0005,
  },
  'openrouter/google/gemini-pro-vision': {
    input: 0.000125,
    output: 0.000375,
  },
  'openrouter/fireworks/firellava-13b': {input: 0.0002, output: 0.0002},
  'openrouter/meta-llama/llama-3-8b-instruct:free': {
    input: 0.0,
    output: 0.0,
  },
  'openrouter/meta-llama/llama-3-8b-instruct:extended': {
    input: 0.000225,
    output: 0.00225,
  },
  'openrouter/meta-llama/llama-3-70b-instruct:nitro': {
    input: 0.0009,
    output: 0.0009,
  },
  'openrouter/meta-llama/llama-3-70b-instruct': {
    input: 0.00059,
    output: 0.00079,
  },
  'openrouter/openai/gpt-4o': {input: 0.005, output: 0.015},
  'openrouter/openai/gpt-4o-2024-05-13': {input: 0.005, output: 0.015},
  'openrouter/openai/gpt-4-vision-preview': {input: 0.01, output: 0.03},
  'openrouter/openai/gpt-3.5-turbo': {input: 0.0015, output: 0.002},
  'openrouter/openai/gpt-3.5-turbo-16k': {input: 0.003, output: 0.004},
  'openrouter/openai/gpt-4': {input: 0.03, output: 0.06},
  'openrouter/anthropic/claude-instant-v1': {
    input: 0.00163,
    output: 0.00551,
  },
  'openrouter/anthropic/claude-2': {input: 0.01102, output: 0.03268},
  'openrouter/anthropic/claude-3-opus': {input: 0.015, output: 0.075},
  'openrouter/google/palm-2-chat-bison': {input: 0.0005, output: 0.0005},
  'openrouter/google/palm-2-codechat-bison': {
    input: 0.0005,
    output: 0.0005,
  },
  'openrouter/meta-llama/llama-2-13b-chat': {input: 0.0002, output: 0.0002},
  'openrouter/meta-llama/llama-2-70b-chat': {input: 0.0015, output: 0.0015},
  'openrouter/meta-llama/codellama-34b-instruct': {
    input: 0.0005,
    output: 0.0005,
  },
  'openrouter/nousresearch/nous-hermes-llama2-13b': {
    input: 0.0002,
    output: 0.0002,
  },
  'openrouter/mancer/weaver': {input: 0.005625, output: 0.005625},
  'openrouter/gryphe/mythomax-l2-13b': {input: 0.001875, output: 0.001875},
  'openrouter/jondurbin/airoboros-l2-70b-2.1': {
    input: 0.013875,
    output: 0.013875,
  },
  'openrouter/undi95/remm-slerp-l2-13b': {
    input: 0.001875,
    output: 0.001875,
  },
  'openrouter/pygmalionai/mythalion-13b': {
    input: 0.001875,
    output: 0.001875,
  },
  'openrouter/mistralai/mistral-7b-instruct': {
    input: 0.00013,
    output: 0.00013,
  },
  'openrouter/mistralai/mistral-7b-instruct:free': {
    input: 0.0,
    output: 0.0,
  },
  'j2-ultra': {input: 0.015, output: 0.015},
  'j2-mid': {input: 0.01, output: 0.01},
  'j2-light': {input: 0.003, output: 0.003},
  dolphin: {input: 0.0005, output: 0.0005},
  chatdolphin: {input: 0.0005, output: 0.0005},
  'luminous-base': {input: 0.03, output: 0.033},
  'luminous-base-control': {input: 0.0375, output: 0.04125},
  'luminous-extended': {input: 0.045, output: 0.0495},
  'luminous-extended-control': {input: 0.05625, output: 0.061875},
  'luminous-supreme': {input: 0.175, output: 0.1925},
  'luminous-supreme-control': {input: 0.21875, output: 0.240625},
  'ai21.j2-mid-v1': {input: 0.0125, output: 0.0125},
  'ai21.j2-ultra-v1': {input: 0.0188, output: 0.0188},
  'ai21.jamba-instruct-v1:0': {input: 0.0005, output: 0.0007},
  'amazon.titan-text-lite-v1': {input: 0.0003, output: 0.0004},
  'amazon.titan-text-express-v1': {input: 0.0013, output: 0.0017},
  'amazon.titan-embed-text-v1': {input: 0.0001, output: 0.0},
  'amazon.titan-embed-text-v2:0': {input: 0.0002, output: 0.0},
  'mistral.mistral-7b-instruct-v0:2': {input: 0.00015, output: 0.0002},
  'mistral.mixtral-8x7b-instruct-v0:1': {input: 0.00045, output: 0.0007},
  'mistral.mistral-large-2402-v1:0': {input: 0.008, output: 0.024},
  'bedrock/us-west-2/mistral.mixtral-8x7b-instruct-v0:1': {
    input: 0.00045,
    output: 0.0007,
  },
  'bedrock/us-east-1/mistral.mixtral-8x7b-instruct-v0:1': {
    input: 0.00045,
    output: 0.0007,
  },
  'bedrock/eu-west-3/mistral.mixtral-8x7b-instruct-v0:1': {
    input: 0.00059,
    output: 0.00091,
  },
  'bedrock/us-west-2/mistral.mistral-7b-instruct-v0:2': {
    input: 0.00015,
    output: 0.0002,
  },
  'bedrock/us-east-1/mistral.mistral-7b-instruct-v0:2': {
    input: 0.00015,
    output: 0.0002,
  },
  'bedrock/eu-west-3/mistral.mistral-7b-instruct-v0:2': {
    input: 0.0002,
    output: 0.00026,
  },
  'bedrock/us-east-1/mistral.mistral-large-2402-v1:0': {
    input: 0.008,
    output: 0.024,
  },
  'bedrock/us-west-2/mistral.mistral-large-2402-v1:0': {
    input: 0.008,
    output: 0.024,
  },
  'bedrock/eu-west-3/mistral.mistral-large-2402-v1:0': {
    input: 0.0104,
    output: 0.0312,
  },
  'anthropic.claude-3-sonnet-20240229-v1:0': {input: 0.003, output: 0.015},
  'anthropic.claude-3-5-sonnet-20240620-v1:0': {
    input: 0.003,
    output: 0.015,
  },
  'anthropic.claude-3-haiku-20240307-v1:0': {
    input: 0.00025,
    output: 0.00125,
  },
  'anthropic.claude-3-opus-20240229-v1:0': {input: 0.015, output: 0.075},
  'anthropic.claude-v1': {input: 0.008, output: 0.024},
  'bedrock/us-east-1/anthropic.claude-v1': {input: 0.008, output: 0.024},
  'bedrock/us-west-2/anthropic.claude-v1': {input: 0.008, output: 0.024},
  'bedrock/ap-northeast-1/anthropic.claude-v1': {
    input: 0.008,
    output: 0.024,
  },
  'bedrock/eu-central-1/anthropic.claude-v1': {input: 0.008, output: 0.024},
  'anthropic.claude-v2': {input: 0.008, output: 0.024},
  'bedrock/us-east-1/anthropic.claude-v2': {input: 0.008, output: 0.024},
  'bedrock/us-west-2/anthropic.claude-v2': {input: 0.008, output: 0.024},
  'bedrock/ap-northeast-1/anthropic.claude-v2': {
    input: 0.008,
    output: 0.024,
  },
  'bedrock/eu-central-1/anthropic.claude-v2': {input: 0.008, output: 0.024},
  'anthropic.claude-v2:1': {input: 0.008, output: 0.024},
  'bedrock/us-east-1/anthropic.claude-v2:1': {input: 0.008, output: 0.024},
  'bedrock/us-west-2/anthropic.claude-v2:1': {input: 0.008, output: 0.024},
  'bedrock/ap-northeast-1/anthropic.claude-v2:1': {
    input: 0.008,
    output: 0.024,
  },
  'bedrock/eu-central-1/anthropic.claude-v2:1': {
    input: 0.008,
    output: 0.024,
  },
  'anthropic.claude-instant-v1': {input: 0.00163, output: 0.00551},
  'bedrock/us-east-1/anthropic.claude-instant-v1': {
    input: 0.0008,
    output: 0.0024,
  },
  'bedrock/us-west-2/anthropic.claude-instant-v1': {
    input: 0.0008,
    output: 0.0024,
  },
  'bedrock/ap-northeast-1/anthropic.claude-instant-v1': {
    input: 0.00223,
    output: 0.00755,
  },
  'bedrock/eu-central-1/anthropic.claude-instant-v1': {
    input: 0.00248,
    output: 0.00838,
  },
  'cohere.command-text-v14': {input: 0.0015, output: 0.002},
  'cohere.command-light-text-v14': {input: 0.0003, output: 0.0006},
  'cohere.command-r-plus-v1:0': {input: 0.003, output: 0.015},
  'cohere.command-r-v1:0': {input: 0.0005, output: 0.0015},
  'cohere.embed-english-v3': {input: 0.0001, output: 0.0},
  'cohere.embed-multilingual-v3': {input: 0.0001, output: 0.0},
  'meta.llama2-13b-chat-v1': {input: 0.00075, output: 0.001},
  'meta.llama2-70b-chat-v1': {input: 0.00195, output: 0.00256},
  'meta.llama3-8b-instruct-v1:0': {input: 0.0004, output: 0.0006},
  'meta.llama3-70b-instruct-v1:0': {input: 0.00265, output: 0.0035},
  'meta.llama3-1-8b-instruct-v1:0': {input: 0.0004, output: 0.0006},
  'meta.llama3-1-70b-instruct-v1:0': {input: 0.00265, output: 0.0035},
  'sagemaker/meta-textgeneration-llama-2-7b': {input: 0.0, output: 0.0},
  'sagemaker/meta-textgeneration-llama-2-7b-f': {input: 0.0, output: 0.0},
  'sagemaker/meta-textgeneration-llama-2-13b': {input: 0.0, output: 0.0},
  'sagemaker/meta-textgeneration-llama-2-13b-f': {input: 0.0, output: 0.0},
  'sagemaker/meta-textgeneration-llama-2-70b': {input: 0.0, output: 0.0},
  'sagemaker/meta-textgeneration-llama-2-70b-b-f': {
    input: 0.0,
    output: 0.0,
  },
  'together-ai-up-to-4b': {input: 0.0001, output: 0.0001},
  'together-ai-4.1b-8b': {input: 0.0002, output: 0.0002},
  'together-ai-8.1b-21b': {input: 0.0003, output: 0.0003},
  'together-ai-21.1b-41b': {input: 0.0008, output: 0.0008},
  'together-ai-41.1b-80b': {input: 0.0009, output: 0.0009},
  'together-ai-81.1b-110b': {input: 0.0018, output: 0.0018},
  'together_ai/mistralai/Mixtral-8x7B-Instruct-v0.1': {
    input: 0.0006,
    output: 0.0006,
  },
  'ollama/codegemma': {input: 0.0, output: 0.0},
  'ollama/llama2': {input: 0.0, output: 0.0},
  'ollama/llama2:13b': {input: 0.0, output: 0.0},
  'ollama/llama2:70b': {input: 0.0, output: 0.0},
  'ollama/llama2-uncensored': {input: 0.0, output: 0.0},
  'ollama/llama3': {input: 0.0, output: 0.0},
  'ollama/llama3:70b': {input: 0.0, output: 0.0},
  'ollama/mistral': {input: 0.0, output: 0.0},
  'ollama/mistral-7B-Instruct-v0.1': {input: 0.0, output: 0.0},
  'ollama/mistral-7B-Instruct-v0.2': {input: 0.0, output: 0.0},
  'ollama/mixtral-8x7B-Instruct-v0.1': {input: 0.0, output: 0.0},
  'ollama/mixtral-8x22B-Instruct-v0.1': {input: 0.0, output: 0.0},
  'ollama/codellama': {input: 0.0, output: 0.0},
  'ollama/orca-mini': {input: 0.0, output: 0.0},
  'ollama/vicuna': {input: 0.0, output: 0.0},
  'deepinfra/lizpreciatior/lzlv_70b_fp16_hf': {
    input: 0.0007,
    output: 0.0009,
  },
  'deepinfra/Gryphe/MythoMax-L2-13b': {input: 0.00022, output: 0.00022},
  'deepinfra/mistralai/Mistral-7B-Instruct-v0.1': {
    input: 0.00013,
    output: 0.00013,
  },
  'deepinfra/meta-llama/Llama-2-70b-chat-hf': {
    input: 0.0007,
    output: 0.0009,
  },
  'deepinfra/cognitivecomputations/dolphin-2.6-mixtral-8x7b': {
    input: 0.00027,
    output: 0.00027,
  },
  'deepinfra/codellama/CodeLlama-34b-Instruct-hf': {
    input: 0.0006,
    output: 0.0006,
  },
  'deepinfra/deepinfra/mixtral': {input: 0.00027, output: 0.00027},
  'deepinfra/Phind/Phind-CodeLlama-34B-v2': {input: 0.0006, output: 0.0006},
  'deepinfra/mistralai/Mixtral-8x7B-Instruct-v0.1': {
    input: 0.00027,
    output: 0.00027,
  },
  'deepinfra/deepinfra/airoboros-70b': {input: 0.0007, output: 0.0009},
  'deepinfra/01-ai/Yi-34B-Chat': {input: 0.0006, output: 0.0006},
  'deepinfra/01-ai/Yi-6B-200K': {input: 0.00013, output: 0.00013},
  'deepinfra/jondurbin/airoboros-l2-70b-gpt4-1.4.1': {
    input: 0.0007,
    output: 0.0009,
  },
  'deepinfra/meta-llama/Llama-2-13b-chat-hf': {
    input: 0.00022,
    output: 0.00022,
  },
  'deepinfra/amazon/MistralLite': {input: 0.0002, output: 0.0002},
  'deepinfra/meta-llama/Llama-2-7b-chat-hf': {
    input: 0.00013,
    output: 0.00013,
  },
  'deepinfra/meta-llama/Meta-Llama-3-8B-Instruct': {
    input: 8e-5,
    output: 8e-5,
  },
  'deepinfra/meta-llama/Meta-Llama-3-70B-Instruct': {
    input: 0.00059,
    output: 0.00079,
  },
  'deepinfra/01-ai/Yi-34B-200K': {input: 0.0006, output: 0.0006},
  'deepinfra/openchat/openchat_3.5': {input: 0.00013, output: 0.00013},
  'perplexity/codellama-34b-instruct': {input: 0.00035, output: 0.0014},
  'perplexity/codellama-70b-instruct': {input: 0.0007, output: 0.0028},
  'perplexity/pplx-7b-chat': {input: 7e-5, output: 0.00028},
  'perplexity/pplx-70b-chat': {input: 0.0007, output: 0.0028},
  'perplexity/pplx-7b-online': {input: 0.0, output: 0.00028},
  'perplexity/pplx-70b-online': {input: 0.0, output: 0.0028},
  'perplexity/llama-2-70b-chat': {input: 0.0007, output: 0.0028},
  'perplexity/mistral-7b-instruct': {input: 7e-5, output: 0.00028},
  'perplexity/mixtral-8x7b-instruct': {input: 7e-5, output: 0.00028},
  'perplexity/sonar-small-chat': {input: 7e-5, output: 0.00028},
  'perplexity/sonar-small-online': {input: 0.0, output: 0.00028},
  'perplexity/sonar-medium-chat': {input: 0.0006, output: 0.0018},
  'perplexity/sonar-medium-online': {input: 0.0, output: 0.0018},
  'fireworks_ai/firefunction-v2': {input: 0.0009, output: 0.0009},
  'fireworks_ai/mixtral-8x22b-instruct-hf': {input: 0.0012, output: 0.0012},
  'fireworks_ai/qwen2-72b-instruct': {input: 0.0009, output: 0.0009},
  'fireworks_ai/yi-large': {input: 0.003, output: 0.003},
  'fireworks_ai/deepseek-coder-v2-instruct': {
    input: 0.0012,
    output: 0.0012,
  },
  'anyscale/mistralai/Mistral-7B-Instruct-v0.1': {
    input: 0.00015,
    output: 0.00015,
  },
  'anyscale/mistralai/Mixtral-8x7B-Instruct-v0.1': {
    input: 0.00015,
    output: 0.00015,
  },
  'anyscale/mistralai/Mixtral-8x22B-Instruct-v0.1': {
    input: 0.0009,
    output: 0.0009,
  },
  'anyscale/HuggingFaceH4/zephyr-7b-beta': {
    input: 0.00015,
    output: 0.00015,
  },
  'anyscale/google/gemma-7b-it': {input: 0.00015, output: 0.00015},
  'anyscale/meta-llama/Llama-2-7b-chat-hf': {
    input: 0.00015,
    output: 0.00015,
  },
  'anyscale/meta-llama/Llama-2-13b-chat-hf': {
    input: 0.00025,
    output: 0.00025,
  },
  'anyscale/meta-llama/Llama-2-70b-chat-hf': {input: 0.001, output: 0.001},
  'anyscale/codellama/CodeLlama-34b-Instruct-hf': {
    input: 0.001,
    output: 0.001,
  },
  'anyscale/codellama/CodeLlama-70b-Instruct-hf': {
    input: 0.001,
    output: 0.001,
  },
  'anyscale/meta-llama/Meta-Llama-3-8B-Instruct': {
    input: 0.00015,
    output: 0.00015,
  },
  'anyscale/meta-llama/Meta-Llama-3-70B-Instruct': {
    input: 0.001,
    output: 0.001,
  },
  'cloudflare/@cf/meta/llama-2-7b-chat-fp16': {
    input: 0.001923,
    output: 0.001923,
  },
  'cloudflare/@cf/meta/llama-2-7b-chat-int8': {
    input: 0.001923,
    output: 0.001923,
  },
  'cloudflare/@cf/mistral/mistral-7b-instruct-v0.1': {
    input: 0.001923,
    output: 0.001923,
  },
  'cloudflare/@hf/thebloke/codellama-7b-instruct-awq': {
    input: 0.001923,
    output: 0.001923,
  },
  'voyage/voyage-01': {input: 0.0001, output: 0.0},
  'voyage/voyage-lite-01': {input: 0.0001, output: 0.0},
  'voyage/voyage-large-2': {input: 0.00012, output: 0.0},
  'voyage/voyage-law-2': {input: 0.00012, output: 0.0},
  'voyage/voyage-code-2': {input: 0.00012, output: 0.0},
  'voyage/voyage-2': {input: 0.0001, output: 0.0},
  'voyage/voyage-lite-02-instruct': {input: 0.0001, output: 0.0},
  'databricks/databricks-dbrx-instruct': {input: 0.00075, output: 0.00225},
  'databricks/databricks-meta-llama-3-70b-instruct': {
    input: 0.001,
    output: 0.003,
  },
  'databricks/databricks-llama-2-70b-chat': {input: 0.0005, output: 0.0015},
  'databricks/databricks-mixtral-8x7b-instruct': {
    input: 0.0005,
    output: 0.001,
  },
  'databricks/databricks-mpt-30b-instruct': {input: 0.001, output: 0.001},
  'databricks/databricks-mpt-7b-instruct': {input: 0.0005, output: 0.0005},
  'databricks/databricks-bge-large-en': {input: 0.0001, output: 0.0},
};