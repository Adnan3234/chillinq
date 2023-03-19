import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import OpenOrder from '../../../components/SmartStore/OpenOrder'

// import DashboardIndexPage from '@/pages/dashboard'

describe('Dashboard page', () => {
    it('should render properly', () => {
        render(<OpenOrder />);
        const header = screen.getByRole('heading');
        let val = 'Adnan'
        expect(header).toHaveTextContent(val)
    })
})