export interface IMainPageClosestEvents{
    id: string;
    title: string;
    day: string;
    note?: string;
}

export interface IMainPageNewestEvents{
    selectedEventId: (id: string) => void;
    showEditModal: () => void;
}