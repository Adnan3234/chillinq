import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import DashboardIndexPage from '../../../pages/dashboard'
// import DashboardIndexPage from '@/pages/dashboard'

describe('Dashboard page', () => {
    it('should render properly', () => {
        render(<DashboardIndexPage />);
        const header = screen.getByRole('heading');
        let val = 'Dashboard File'
        expect(header).toHaveTextContent(val)
    })
})