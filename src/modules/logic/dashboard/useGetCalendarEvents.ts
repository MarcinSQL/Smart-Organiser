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
            start: element.startTime ? element.day + " " + element.startTime : element.day,
            end: element.endTime ? element.day + " " + element.endTime : element.day,
            color: element.eventType === "private" ? "#1976d2" : "orange"
        };
        eventsList.push(event);
    });

    return { eventsList };
}