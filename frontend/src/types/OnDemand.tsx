export interface OnDemandItem {
    title: string,
    image: string,
    lastPublished: string,
    duration: number
    //description, audioURL excluded for now
}

export interface OnDemandPayload {
    highlights: OnDemandItem[],
    fullShows: OnDemandItem[],
    // programmeId: string - redundant for the time being
}