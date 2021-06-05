import { renderWithTheme } from 'utils/tests/helpers'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Checkbox from '.'
import theme from 'styles/theme'

describe('<Checkbox />', () => {
  test('should render label', () => {
    renderWithTheme(<Checkbox label="lorem ipsum" labelFor="check" />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText(/lorem ipsum/i)).toBeInTheDocument()
    expect(screen.getByText(/lorem ipsum/i)).toHaveAttribute('for', 'check')
  })

  test('should not render label', () => {
    renderWithTheme(<Checkbox />)
    expect(screen.queryByLabelText('label')).not.toBeInTheDocument()
  })

  test('should render with black label', () => {
    renderWithTheme(
      <Checkbox label="lorem ipsum" labelFor="check" labelColor="black" />,
    )
    expect(screen.getByText(/lorem ipsum/i)).toHaveStyle({
      color: theme.colors.black,
    })
  })

  test('should dispatch oncheck', async () => {
    const onCheck = jest.fn()

    renderWithTheme(<Checkbox label="lorem ipsum" onCheck={onCheck} />)
    expect(onCheck).not.toHaveBeenCalled()

    // fireEvent.click(screen.getByRole('checkbox'))
    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith(true)
  })

  test('should uncheck', async () => {
    const onCheck = jest.fn()

    renderWithTheme(
      <Checkbox label="lorem ipsum" onCheck={onCheck} isChecked />,
    )

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledWith(false)
    })
  })

  test('should be accessible with tab', () => {
    renderWithTheme(<Checkbox label="lorem ipsum" labelFor="check" />)

    expect(document.body).toHaveFocus()
    userEvent.tab()
    expect(screen.getByRole('checkbox')).toHaveFocus()
  })
})
