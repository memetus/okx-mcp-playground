import { get_tokens } from "../../hooks/trade";
import { GetTokensResponse } from "../../shared/types/response/trade";
import { TradeTool } from "../../shared/types/tools/tradeTool";
import z from "zod";

const TOOL_NAME = "TRADE_GET_TOKENS";

export const getTokensParams = {
  chainIndex: z.string(),
  chainId: z.string(),
};

export const getTokensParamsZodSchema = z.object({
  ...getTokensParams,
});

export type GetTokensParamType = z.infer<typeof getTokensParamsZodSchema>;

export const getTokensTool: TradeTool<
  typeof getTokensParams,
  GetTokensParamType,
  GetTokensResponse
> = {
  name: TOOL_NAME,
  description:
    "It fetches a list of tokens. This interface returns a list of tokens that belong to major platforms or are deemed significant enough by OKX. However, you can still quote and swap other tokens outside of this list on OKX DEX.",
  parameters: {
    ...getTokensParams,
  },
  handler: async (params: GetTokensParamType): Promise<GetTokensResponse> => {
    return await get_tokens(params);
  },
};
