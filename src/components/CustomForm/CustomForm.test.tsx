import { beforeEach, describe, it, vi } from 'vitest';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { CustomForm } from './CustomForm';

beforeEach(async () => {
  await act(async () => {
    const handler = vi.fn();
    render(<CustomForm addCard={handler} />);
  });
});

describe('CustomForm', () => {
  it('Test incorrect first name (empty)', () => {
    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: '' } });
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
  });
  it('Test incorrect first name (lower case)', () => {
    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'ame' } });
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
  });
  it('Test correct first name', () => {
    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'Name' } });
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
  });
  it('Test incorrect surname (empty)', () => {
    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'Name' } });
    fireEvent.change(screen.getAllByRole('textbox')[1], { target: { value: '' } });
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
  });
  it('Test incorrect surname (lower case)', () => {
    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'Name' } });
    fireEvent.change(screen.getAllByRole('textbox')[1], { target: { value: 'urname' } });
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
  });
  it('Test correct surname', () => {
    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'Name' } });
    fireEvent.change(screen.getAllByRole('textbox')[1], { target: { value: 'Surname' } });
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
  });

  it('Test incorrect date', async () => {
    await act(async () => {
      fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'Name' } });
      fireEvent.change(screen.getAllByRole('textbox')[1], { target: { value: 'Surname' } });
      fireEvent.change(screen.getByTestId('date'), { target: { value: '9999-01-01' } });
      fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
    });
  });
  it('Test incorrect date', async () => {
    await act(async () => {
      fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'Name' } });
      fireEvent.change(screen.getAllByRole('textbox')[1], { target: { value: 'Surname' } });
      fireEvent.change(screen.getByTestId('date'), { target: { value: '2023-12-31' } });
      fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
    });
  });
  it('Test incorrect date', async () => {
    await act(async () => {
      fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'Name' } });
      fireEvent.change(screen.getAllByRole('textbox')[1], { target: { value: 'Surname' } });
      fireEvent.change(screen.getByTestId('date'), { target: { value: '2023-03-31' } });
      fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
    });
  });
  it('Test incorrect date', async () => {
    await act(async () => {
      fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'Name' } });
      fireEvent.change(screen.getAllByRole('textbox')[1], { target: { value: 'Surname' } });
      fireEvent.change(screen.getByTestId('date'), { target: { value: '1900-01-01' } });
      fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
    });
  });
  it('Test correct date', async () => {
    await act(async () => {
      fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'Name' } });
      fireEvent.change(screen.getAllByRole('textbox')[1], { target: { value: 'Surname' } });
      fireEvent.change(screen.getByTestId('date'), { target: { value: '2022-01-01' } });
      fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
    });
  });

  it('Test country select (empty)', () => {
    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'Name' } });
    fireEvent.change(screen.getAllByRole('textbox')[1], { target: { value: 'Surname' } });
    fireEvent.change(screen.getByTestId('date'), { target: { value: '2022-01-01' } });
    fireEvent.change(screen.getByRole('combobox'), { target: { value: '' } });
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
  });
  it('Test country select (empty)', () => {
    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'Name' } });
    fireEvent.change(screen.getAllByRole('textbox')[1], { target: { value: 'Surname' } });
    fireEvent.change(screen.getByTestId('date'), { target: { value: '2022-01-01' } });
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'russia' } });
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
  });
  it('Test correct radio', () => {
    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'Name' } });
    fireEvent.change(screen.getAllByRole('textbox')[1], { target: { value: 'Surname' } });
    fireEvent.change(screen.getByTestId('date'), { target: { value: '2022-01-01' } });
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'russia' } });
    fireEvent.click(screen.getAllByRole('radio')[0]);
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
  });
  it('Test correct file type', () => {
    const file = new File(['image'], 'image.jpeg', { type: 'image/jpeg' });
    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'Name' } });
    fireEvent.change(screen.getAllByRole('textbox')[1], { target: { value: 'Surname' } });
    fireEvent.change(screen.getByTestId('date'), { target: { value: '2022-01-01' } });
    fireEvent.click(screen.getAllByRole('radio')[0]);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'russia' } });
    fireEvent.change(screen.getByTestId('file'), { target: { files: [file] } });
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
  });
  it('Test incorrect file type', () => {
    const file = new File(['text'], 'text.txt', { type: 'text/plain' });
    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'Name' } });
    fireEvent.change(screen.getAllByRole('textbox')[1], { target: { value: 'Surname' } });
    fireEvent.change(screen.getByTestId('date'), { target: { value: '2022-01-01' } });
    fireEvent.click(screen.getAllByRole('radio')[0]);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'russia' } });
    fireEvent.change(screen.getByTestId('file'), { target: { files: [file] } });
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
  });
  it('Test policy checkbox', () => {
    const file = new File(['image'], 'image.jpeg', { type: 'image/jpeg' });
    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'Name' } });
    fireEvent.change(screen.getAllByRole('textbox')[1], { target: { value: 'Surname' } });
    fireEvent.change(screen.getByTestId('date'), { target: { value: '2022-01-01' } });
    fireEvent.click(screen.getAllByRole('radio')[0]);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'russia' } });
    fireEvent.change(screen.getByTestId('file'), { target: { files: [file] } });
    fireEvent.click(screen.getByRole('checkbox'));
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
  });
  describe('CustomForm', () => {
    it('Test incorrect first name (empty)', () => {
      const handler = vi.fn();
      const instance = new CustomForm({ addCard: handler });
      instance.setSendStatus(true);
    });
  });
});
