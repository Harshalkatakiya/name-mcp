import dotenv from "dotenv";
import type { DomainAvailabilityErrorFields, DomainAvailabilitySuccessFields } from "../types/index";
import envValidaiton from "../utils/envValidation";

dotenv.config();

export const apiURL = process.env.NAME_API_BASE_URL || "https://api.name.com" as "https://api.dev.name.com" | "https://api.name.com";
export const apiUsername = process.env.NAME_USERNAME;
export const apiToken = process.env.NAME_API_TOKEN;

export async function checkMultipleDomains(
    domainNames: string[]
): Promise<DomainAvailabilitySuccessFields | DomainAvailabilityErrorFields> {
    try {
        envValidaiton();
        const url = `${apiURL}/v4/domains:checkAvailability`;
        const headers = new Headers();
        headers.set('Content-Type', 'application/json');
        headers.set(
            'Authorization',
            'Basic ' + btoa(`${apiUsername}:${apiToken}`)
        );
        const response = await fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify({ domainNames }),
        });
        if (response.status === 200) {
            const data = await response.json() as DomainAvailabilitySuccessFields;
            for (const item of data.results) {
                item.purchasable = !!item.purchasable;
            }
            return data;
        } else {
            return (await response.json()) as DomainAvailabilityErrorFields;
        }
    } catch (error) {
        return {
            message: (error as Error).message
        };
    }
}