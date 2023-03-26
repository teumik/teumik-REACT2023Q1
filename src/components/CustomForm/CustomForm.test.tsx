import { describe, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { CustomForm } from './CustomForm';

describe('CustomForm', () => {
  it('Test render correct submit', () => {
    const handler = vi.fn();
    const file = new File(['image'], 'image.jpeg', { type: 'image/jpeg' });
    render(<CustomForm addCard={handler} />);
    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'Name' } });
    fireEvent.change(screen.getAllByRole('textbox')[1], { target: { value: 'Surname' } });
    fireEvent.change(screen.getByTestId('date'), { target: { value: '2022-01-01' } });
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'russia' } });
    fireEvent.click(screen.getAllByRole('radio')[1]);
    fireEvent.change(screen.getByTestId('file'), { target: { files: [file] } });
    fireEvent.click(screen.getByRole('checkbox'));
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
  });
  it('Test render incorrect name (lower case)', () => {
    const handler = vi.fn();
    render(<CustomForm addCard={handler} />);
    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'ame' } });
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
  });
  it('Test render incorrect name (empty)', () => {
    const handler = vi.fn();
    render(<CustomForm addCard={handler} />);
    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: '' } });
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
  });
  it('Test render incorrect surname (lower case)', () => {
    const handler = vi.fn();
    render(<CustomForm addCard={handler} />);
    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'Name' } });
    fireEvent.change(screen.getAllByRole('textbox')[1], { target: { value: 'urname' } });
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
  });
  it('Test render incorrect surname (empty)', () => {
    const handler = vi.fn();
    render(<CustomForm addCard={handler} />);
    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'Name' } });
    fireEvent.change(screen.getAllByRole('textbox')[1], { target: { value: '' } });
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
  });
  it('Test render incorrect date', () => {
    const handler = vi.fn();
    render(<CustomForm addCard={handler} />);
    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'Name' } });
    fireEvent.change(screen.getAllByRole('textbox')[1], { target: { value: 'Surname' } });
    fireEvent.change(screen.getByTestId('date'), { target: { value: '9999-01-01' } });
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
  });
  it('Test render incorrect date', () => {
    const handler = vi.fn();
    render(<CustomForm addCard={handler} />);
    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'Name' } });
    fireEvent.change(screen.getAllByRole('textbox')[1], { target: { value: 'Surname' } });
    fireEvent.change(screen.getByTestId('date'), { target: { value: '9999-99-01' } });
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
  });
  it('Test render incorrect date', () => {
    const handler = vi.fn();
    render(<CustomForm addCard={handler} />);
    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'Name' } });
    fireEvent.change(screen.getAllByRole('textbox')[1], { target: { value: 'Surname' } });
    fireEvent.change(screen.getByTestId('date'), { target: { value: '9999-99-99' } });
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
  });
  it('Test render incorrect date', () => {
    const handler = vi.fn();
    render(<CustomForm addCard={handler} />);
    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'Name' } });
    fireEvent.change(screen.getAllByRole('textbox')[1], { target: { value: 'Surname' } });
    fireEvent.change(screen.getByTestId('date'), {
      target: { value: `${new Date().getFullYear()}-99-01` },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
  });
  it('Test render incorrect date', () => {
    const handler = vi.fn();
    render(<CustomForm addCard={handler} />);
    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'Name' } });
    fireEvent.change(screen.getAllByRole('textbox')[1], { target: { value: 'Surname' } });
    fireEvent.change(screen.getByTestId('date'), {
      target: { value: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-99` },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
  });
  it('Test render incorrect date', () => {
    const handler = vi.fn();
    render(<CustomForm addCard={handler} />);
    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'Name' } });
    fireEvent.change(screen.getAllByRole('textbox')[1], { target: { value: 'Surname' } });
    fireEvent.change(screen.getByTestId('date'), {
      target: {
        value: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
      },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
  });
  it('Test render incorrect date', () => {
    const handler = vi.fn();
    render(<CustomForm addCard={handler} />);
    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'Name' } });
    fireEvent.change(screen.getAllByRole('textbox')[1], { target: { value: 'Surname' } });
    fireEvent.change(screen.getByTestId('date'), { target: { value: '' } });
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
  });
  it('Test render incorrect date', () => {
    const handler = vi.fn();
    render(<CustomForm addCard={handler} />);
    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'Name' } });
    fireEvent.change(screen.getAllByRole('textbox')[1], { target: { value: 'Surname' } });
    fireEvent.change(screen.getByTestId('date'), { target: { value: '1000-01-01' } });
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
  });
  it('Test render incorrect radio (empty)', () => {
    const handler = vi.fn();
    render(<CustomForm addCard={handler} />);
    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'Name' } });
    fireEvent.change(screen.getAllByRole('textbox')[1], { target: { value: 'Surname' } });
    fireEvent.change(screen.getByTestId('date'), { target: { value: '2022-01-01' } });
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'russia' } });
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
  });
  it('Test render correct radio', () => {
    const handler = vi.fn();
    render(<CustomForm addCard={handler} />);
    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'Name' } });
    fireEvent.change(screen.getAllByRole('textbox')[1], { target: { value: 'Surname' } });
    fireEvent.change(screen.getByTestId('date'), { target: { value: '2022-01-01' } });
    fireEvent.click(screen.getAllByRole('radio')[0]);
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
  });
  it('Test render correct radio', () => {
    const handler = vi.fn();
    render(<CustomForm addCard={handler} />);
    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'Name' } });
    fireEvent.change(screen.getAllByRole('textbox')[1], { target: { value: 'Surname' } });
    fireEvent.change(screen.getByTestId('date'), { target: { value: '2022-01-01' } });
    fireEvent.click(screen.getAllByRole('radio')[1]);
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
  });
  it('Test render correct radio', () => {
    const handler = vi.fn();
    render(<CustomForm addCard={handler} />);
    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'Name' } });
    fireEvent.change(screen.getAllByRole('textbox')[1], { target: { value: 'Surname' } });
    fireEvent.change(screen.getByTestId('date'), { target: { value: '2022-01-01' } });
    fireEvent.click(screen.getAllByRole('radio')[2]);
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
  });
  it('Test render correct select', () => {
    const handler = vi.fn();
    render(<CustomForm addCard={handler} />);
    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'Name' } });
    fireEvent.change(screen.getAllByRole('textbox')[1], { target: { value: 'Surname' } });
    fireEvent.change(screen.getByTestId('date'), { target: { value: '2022-01-01' } });
    fireEvent.click(screen.getAllByRole('radio')[2]);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'belarus' } });
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
  });
  it('Test render correct select', () => {
    const handler = vi.fn();
    render(<CustomForm addCard={handler} />);
    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'Name' } });
    fireEvent.change(screen.getAllByRole('textbox')[1], { target: { value: 'Surname' } });
    fireEvent.change(screen.getByTestId('date'), { target: { value: '2022-01-01' } });
    fireEvent.click(screen.getAllByRole('radio')[2]);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'ukraine' } });
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
  });
  it('Test render correct select', () => {
    const handler = vi.fn();
    render(<CustomForm addCard={handler} />);
    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'Name' } });
    fireEvent.change(screen.getAllByRole('textbox')[1], { target: { value: 'Surname' } });
    fireEvent.change(screen.getByTestId('date'), { target: { value: '2022-01-01' } });
    fireEvent.click(screen.getAllByRole('radio')[2]);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'russia' } });
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
  });
  it('Test render incorrect select (empty)', () => {
    const handler = vi.fn();
    render(<CustomForm addCard={handler} />);
    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'Name' } });
    fireEvent.change(screen.getAllByRole('textbox')[1], { target: { value: 'Surname' } });
    fireEvent.change(screen.getByTestId('date'), { target: { value: '2022-01-01' } });
    fireEvent.click(screen.getAllByRole('radio')[2]);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: '' } });
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
  });
  it('Test render correct submit', () => {
    const handler = vi.fn();
    const file = new File(['image'], 'image.jpeg', { type: 'image/jpeg' });
    render(<CustomForm addCard={handler} />);
    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'Name' } });
    fireEvent.change(screen.getAllByRole('textbox')[1], { target: { value: 'Surname' } });
    fireEvent.change(screen.getByTestId('date'), { target: { value: '2000-01-01' } });
    fireEvent.click(screen.getAllByRole('radio')[2]);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'ukraine' } });
    fireEvent.change(screen.getByTestId('file'), { target: { files: [file] } });
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
  });
  it('Test render incorrect file type', () => {
    const handler = vi.fn();
    const file = new File(['text'], 'text.txt', { type: 'text/plain' });
    render(<CustomForm addCard={handler} />);
    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'Name' } });
    fireEvent.change(screen.getAllByRole('textbox')[1], { target: { value: 'Surname' } });
    fireEvent.change(screen.getByTestId('date'), { target: { value: '2022-01-01' } });
    fireEvent.click(screen.getAllByRole('radio')[2]);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'ukraine' } });
    fireEvent.change(screen.getByTestId('file'), { target: { files: [file] } });
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
  });
});
