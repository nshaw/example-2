import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import 'components/__mocks__/i18n';
import conferenceMocks from 'components/__mocks__/conferenceMocks';
import ConferenceTable from 'components/ConferenceTable';

describe('ConferenceTable', () => {
  it('shows conferences', () => {
    const { getByText } = render(<ConferenceTable items={conferenceMocks} />);
    expect(
      getByText(
        'Vel eos nesciunt debitis quos. Reprehenderit ipsum quisquam autem exercitationem voluptate. Voluptatem sed impedit corrupti. Nihil aut eveniet sunt laborum minima dolores consectetur. Eaque enim libero tempora nam dolor.'
      )
    ).toBeInTheDocument();
    expect(
      getByText(
        'Repellendus accusantium est perspiciatis possimus architecto pariatur rem. Non quo nostrum molestias dignissimos consequatur perspiciatis. Cum quasi non itaque quis recusandae repellat. Quae alias quo eum optio quia est id.'
      )
    ).toBeInTheDocument();
  });

  it('shows no conferences message', () => {
    const { queryByText } = render(<ConferenceTable items={[]} />);
    expect(
      queryByText(
        'Vel eos nesciunt debitis quos. Reprehenderit ipsum quisquam autem exercitationem voluptate. Voluptatem sed impedit corrupti. Nihil aut eveniet sunt laborum minima dolores consectetur. Eaque enim libero tempora nam dolor.'
      )
    ).not.toBeInTheDocument();
    expect(
      queryByText(
        'Repellendus accusantium est perspiciatis possimus architecto pariatur rem. Non quo nostrum molestias dignissimos consequatur perspiciatis. Cum quasi non itaque quis recusandae repellat. Quae alias quo eum optio quia est id.'
      )
    ).not.toBeInTheDocument();

    expect(queryByText('entities.conference.noItems')).toBeInTheDocument();
  });

  it('calls onSelect when the user clicks a table row', () => {
    const onSelectMock = jest.fn();
    const { getByText } = render(
      <ConferenceTable items={conferenceMocks} onSelect={onSelectMock} />
    );
    fireEvent.click(
      getByText(
        'Vel eos nesciunt debitis quos. Reprehenderit ipsum quisquam autem exercitationem voluptate. Voluptatem sed impedit corrupti. Nihil aut eveniet sunt laborum minima dolores consectetur. Eaque enim libero tempora nam dolor.'
      )
    );
    expect(onSelectMock).toHaveBeenCalledTimes(1);
  });
});
