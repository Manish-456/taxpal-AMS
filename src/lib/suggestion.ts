import { IconType } from "@/components/Icons";

export type SuggestionTypeLists = {
    title : string;
    icon : IconType;
    subtitle : string;
    text : string;
    image : string;

}[]

export const suggestionLists : SuggestionTypeLists = [
    {
        title : "Reporting",
        icon : 'reports',
        subtitle : "Stay on top of things with always up to-date reporting features.",
        text : 'We talked about reporting in the section above but we needed three items here, so mentioning it one more time for posterity.',
        image : "/reporting.webp"

    },
    {
        title : "inventory",
        subtitle : "Never lose track of what's in stock with accurate inventory tracking.",
        text : "We don't offer this a part of our software but that statement is inargualby true. Accurate inventory tracking would help you for sure.",
        icon : "inventory",
        image : "/inventory.webp"
    },
    {
        title : "Contacts",
        icon : "contacts",
        subtitle : "Organize all of your contacts, service providers, and invoices in one place.",
        image : "/contacts.webp",
        text : "This also isn't actually a feature. It's just some friendly advice. We definitely recomment that you do this, you'll feel really organized and professional."
    }
]