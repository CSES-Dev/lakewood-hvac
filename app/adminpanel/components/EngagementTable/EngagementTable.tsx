"use client";

import { FieldDefinition, TemplateTable } from "../TemplateTable/Table";
import EngagementRow from "./EngagementRow";
import { Engagement } from "@/models/Engagement";

type EngagementTableProps = {
    engagements: Engagement[];
    onEdit: (engagement: Engagement) => void;
    onDelete: (id: number) => void;
    onAddClick: () => void;
};

export default function EngagementTable({
    engagements,
    onEdit,
    onDelete,
    onAddClick,
}: EngagementTableProps) {
    const engagementsTableFields: FieldDefinition[] = [
        { name: "Published?", align: "center" },
        { name: "Event", align: "left" },
        { name: "Address", align: "left" },
        { name: "Date", align: "left" },
        { name: "Description", align: "left" },
        { name: "Image", align: "left" },
    ];

    return (
        <TemplateTable
            title={"Community Events"}
            fields={engagementsTableFields}
            onAddClick={onAddClick}
            addButtonText={"Add Event"}
        >
            {engagements.map((engagement) => (
                <EngagementRow
                    key={engagement.id}
                    engagement={engagement}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </TemplateTable>
    );
}
