import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  QuoteWrapper,
  QuoteMarkLeft,
  QuoteMarkRight,
  QuoteTitle,
  QuoteContent,
  Author
} from './style';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { QUOTE_REQUEST } from '../../reducers/quote';

const Quote = memo(({extendNavigation}) => {
  const { quote, author, tempQuote, tempAuthor } = useSelector(store => store.quote);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if(extendNavigation){
      dispatch({type: QUOTE_REQUEST});
    }
  }, [extendNavigation]);
  
  return (
    <QuoteWrapper extend={extendNavigation}>
      <QuoteTitle>Inspiration</QuoteTitle>
      <QuoteContent>
        <QuoteMarkLeft icon={faQuoteLeft} />
        {quote || tempQuote}
        <QuoteMarkRight icon={faQuoteRight} />
      </QuoteContent>
      <Author>- {author || tempAuthor}</Author>
    </QuoteWrapper>
  );
});

Quote.propTypes = {
  extendNavigation: PropTypes.bool.isRequired
}

Quote.displayName = 'Quote';
export default Quote;