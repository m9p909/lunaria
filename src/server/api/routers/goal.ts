import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "../trpc";
import { TRPCError } from '@trpc/server'


const goalRouter = createTRPCRouter({
    createGoal: protectedProcedure
        .input(z.object({
            amount: z.number(),
            deadline: z.date(),
            contributionFreq: z.number(),
            contributionTimeFrame: z.enum(["weeks", "months"])
        })).mutation(async ({ ctx, input }) => {
            const user = ctx.session.user
            const prisma = ctx.prisma
            try {
                await prisma.goal.create(
                    {
                        data: {
                            amount: input.amount,
                            deadline: input.deadline,
                            contributionFrequency: input.contributionFreq,
                            contributionTimeFrame: input.contributionTimeFrame,
                            userId: user.id
                        }
                    }

                )

            }
            catch (e) {
                console.error(e)
                throw new TRPCError({
                    code: "INTERNAL_SERVER_ERROR",
                    message: "failed to create goal"
                })
            }
            return "success"
        }),
    getGoal: protectedProcedure
        .query(( async (q) => {
            const session = q.ctx.session
             const res = await q.ctx.prisma.goal.findFirst(
                {
                    where: {
                        userId: session.user.id
                    }
                }
            )
            return res

        }))
});

export { goalRouter }
