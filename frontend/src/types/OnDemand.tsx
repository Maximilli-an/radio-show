export interface OnDemandItem {
    title: string,
    image: string,
    lastPublished: string,
    duration: number
    audioURL: string
}

export interface OnDemandPayload {
    highlights: OnDemandItem[],
    fullShows: OnDemandItem[],
    // programmeId: string - redundant for the time being
}