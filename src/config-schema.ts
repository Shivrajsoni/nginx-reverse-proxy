import { array, z } from "zod";





const upstreamSchema = z.object({
    id:z.string(),
    url:z.string().url()
})

const headerSchema = z.object({
    key:z.string(),
    value:z.string()
}) 

const ruleSchema = z.object({
    path:z.string(),
    upstream:array(z.string())
})


const serverSchema = z.object({
    listen:z.number(),
    workers:z.number().optional(),
    upstreams:array(upstreamSchema),
    header:array(headerSchema).optional(),
    rules:array(ruleSchema)
})

export const rootConfigSchema = z.object({
    server:serverSchema
})