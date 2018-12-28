// Schema for the profile form(s)

export default {
        schema: [
            { id: 'name', title: 'First Name', field: 'Input' },
            { id: 'surname', title: 'Last Name', field: 'Input' },
            {
                id: 'numberOfTraining',
                title: 'Тип абономента',
                lox: 'lox',
                field: 'Select',
                options: [
                    { value: 'twelve', label: '12'},
                    { value: 'eight', label: '8'},
                    { value: 'monthly', label: 'Monthly'},
                ],
                defaultValue: 'ppcm',
                searchable: false,
            },
        ],
};
