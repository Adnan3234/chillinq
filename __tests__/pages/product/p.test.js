import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Products from '../../../components/Products'

// import DashboardIndexPage from '@/pages/dashboard'

describe('Dashboard page', () => {
    it('should render properly', () => {
        render(<Products />);
        const header = screen.getByRole('heading');
        let val = 'Adnan'
        expect(header).toHaveTextContent(val)
    })
})