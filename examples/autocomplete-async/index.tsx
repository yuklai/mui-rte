import React from 'react'
import MUIRichTextEditor, { TAutocompleteItem } from '../../'
import { Chip } from '@mui/material'

const save = (data: string) => {
    console.log(data)
}

const searchUsers = async (_: string): Promise<TAutocompleteItem[]> => {
    const users = [{
        email: 'peter.griffin@email.com',
        first_name: 'Peter',
        last_name: 'Griffin',
    }, {
        email: 'lois.griffin@email.com',
        first_name: 'Lois',
        last_name: 'Griffin',
    }];

    return users.map(u => ({
        keys: [u.email, u.first_name, u.last_name],
        value: `${u.first_name}`,
        content: <Chip label={`${u.first_name} ${u.last_name}`} />,
    }));
};

const Autocomplete = () => {
    return (
        <MUIRichTextEditor
            label="Try typing '@peter' or '@griffin'"
            onSave={save}
            autocomplete={{
                strategies: [
                    {
                        asyncItems: searchUsers,
                        triggerChar: "@",
                        insertSpaceAfter: false
                    }
                ]
            }}
        />
    )
}

export default Autocomplete