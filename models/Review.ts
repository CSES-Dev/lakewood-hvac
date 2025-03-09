export type Review = {
    author: string;
    comment: string;
};

export const ReviewFormModalFields = [
    { field: "author", form_label: "Author", form_type: "text" },
    { field: "comment", form_label: "Comment", form_type: "textarea" },
];
