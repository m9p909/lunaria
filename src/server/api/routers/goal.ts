import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "../trpc";
import { TRPCError } from '@trpc/server'


const goalRouter = createTRPCRouter({
    createGoal: protectedProcedure
        .input(z.object({
            amount: z.number(),
            deadline: z.date(),
            contributionFreq: z.number()
        })).query(async ({ ctx, input }) => {
            const user = ctx.session.user
            const prisma = ctx.prisma
            try {
                await prisma.goal.create(
                    {
                        data: {
                            amount: input.amount,
                            deadline: input.deadline,
                            contributionFrequency: input.contributionFreq,
                            userId: user.id

                        }
                    }

                )

            }
            catch (e) {
                throw new TRPCError({
                    code: "INTERNAL_SERVER_ERROR",
                    message: "failed to create goal"
                })
            }
            return "success"
        }),
    getGoal: protectedProcedure
        .query((q => {
            const session = q.ctx.session
            try{
             return q.ctx.prisma.goal.findFirst(
                {
                    where: {
                        userId: session.user.id
                    }
                }
            )

            } catch(e) {
                throw new TRPCError({
                    code: "NOT_FOUND"
                })
            }
        }))
});

export { goalRouter }
