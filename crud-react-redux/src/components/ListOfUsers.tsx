// 'use client';

import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '@tremor/react';

const data = [
    {
        workspace: 'sales_by_day_api',
        id: '1',
        name: 'John Doe',
        email: 'john.doe@example.com',
        github: 'https://github.com/john-doe',
    },
    {
        workspace: 'marketing_campaign',
        id: '2',
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        github: 'https://github.com/jane-smith',
    },
    {
        workspace: 'sales_campaign',
        id: '3',
        name: 'Robert Wilson',
        email: 'robert.wilson@example.com',
        github: 'https://github.com/robert-wilson',
    },
    {
        workspace: 'development_env',
        id: '4',
        name: 'Mike Johnson',
        email: 'mike.johnson@example.com',
        github: 'https://github.com/mike-johnson',
    },
    {
        workspace: 'new_workspace_1',
        id: '5',
        name: 'Alice Brown',
        email: 'alice.brown@example.com',
        github: 'https://github.com/alice-brown',
    },
    {
        workspace: 'test_environment',
        id: '6',
        name: 'David Clark',
        email: 'david.clark@example.com',
        github: 'https://github.com/david-clark',
    },
];

export function ListOfUsers() {
    return (
        <>
            <div className="sm:flex sm:items-center sm:justify-between sm:space-x-10">
                <div>
                    <h3 className="font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                        Workspaces
                    </h3>
                    <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
                        Overview of all registered workspaces within your organization.
                    </p>
                </div>
                <button
                    type="button"
                    className="mt-4 w-full whitespace-nowrap rounded-tremor-small bg-tremor-brand px-4 py-2.5 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis sm:mt-0 sm:w-fit"
                >
                    Add workspace
                </button>
            </div>
            <Table className="mt-8">
                <TableHead>
                    <TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
                        <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                            Workspace
                        </TableHeaderCell>
                        <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                            Id
                        </TableHeaderCell>
                        <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                            Name
                        </TableHeaderCell>
                        <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                            Email
                        </TableHeaderCell>
                        <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                            Github
                        </TableHeaderCell>
                        <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                            Actions
                        </TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item) => (
                        <TableRow key={item.workspace}>
                            <TableCell className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                                {item.workspace}
                            </TableCell>
                            <TableCell>{item.id}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.email}</TableCell>
                            <TableCell>{item.github}</TableCell>
                            <TableCell>
                                <button>Edit</button>
                                <button>Delete</button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}
