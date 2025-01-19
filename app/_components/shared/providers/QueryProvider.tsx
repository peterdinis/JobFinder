"use client"

import { FC, ReactNode } from "react"
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

type QueryProviderProps = {
    children?: ReactNode
}

const QueryProvider: FC<QueryProviderProps> = ({ children }: QueryProviderProps) => {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default QueryProvider