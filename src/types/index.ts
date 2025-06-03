export interface DomainAvailabilitySuccessFields {
    results: {
        domainname: string;
        sld?: string;
        tld: string;
        purchasable: boolean;
        premium?: boolean;
        purchasePrice?: number;
        purchaseType?: string;
        renewalPrice?: number;
        [key: string]: unknown;
    }[]
}

export interface DomainAvailabilityErrorFields {
    message: string;
    details?: string;
    [key: string]: unknown;
}