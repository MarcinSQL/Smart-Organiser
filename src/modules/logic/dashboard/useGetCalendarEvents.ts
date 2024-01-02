import { IEventsList, IRawEvent } from "modules/types/dashboard/calendar.types";
import { useGetCalendarEventsQuery } from "./queries";

export default function useGetCalendarEvents() {
    const { data } = useGetCalendarEventsQuery();

    const eventsList: IEventsList[] = [];
    data?.forEach((element: IRawEvent) => {
        const event: IEventsList = {
            id: element.id,
            title: element.title,
            allDay: element.isAllDay,
            start: element.startTime ? (element.day).slice(0,-8) + element.startTime : (element.day).slice(0,-8) + "00:00:00",
            end: element.endTime ? (element.day).slice(0,-8) + element.endTime : (element.day).slice(0,-8) + "00:00:00",
            color: element.eventType === "private" ? "#1976d2" : "orange"
        };
        eventsList.push(event);
    });
    
    return { eventsList };
}