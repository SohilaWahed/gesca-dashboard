export interface TableColumn<T> {
    id: string
    label: string
    render: (row: T ) => React.ReactNode
}