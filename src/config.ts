import fs from "node:fs/promises"
import {parse} from "yaml";
import { rootConfigSchema } from "./config-schema";

export async function parseYAMLConfig(filePath:string){
    const ConfigFileRead = await fs.readFile(filePath,'utf-8');
    const configParsed = parse(ConfigFileRead);
    return JSON.stringify(configParsed);
//    console.log(configParsed);
}

export async function validateConfig(config:string){
    const validatedConfig = await rootConfigSchema.parseAsync(JSON.parse(config));
    return validatedConfig;
}