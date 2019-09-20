import React, {memo, useMemo} from 'react';
import {FishWrapper, FishWrapper2, FishWrapper3, FishWrapper4, Light} from './style';
import PropTypes from 'prop-types';

const Fish = memo(({fishId}) => {

  const fish = useMemo(() => {
    switch (fishId) {
      case 1:
        return (
          <FishWrapper>
            <img src={require(`../../assets/images/fish/fish_${fishId}.png`)} alt={`fish${fishId}`} />
            <img src={require(`../../assets/images/fish/fish_${fishId}.png`)} alt={`fish${fishId}`} />
            <img src={require(`../../assets/images/fish/fish_${fishId}.png`)} alt={`fish${fishId}`} />
            <img src={require(`../../assets/images/fish/fish_${fishId}.png`)} alt={`fish${fishId}`} />
            <img src={require(`../../assets/images/fish/fish_${fishId}.png`)} alt={`fish${fishId}`} />
            <img src={require(`../../assets/images/fish/fish_${fishId}.png`)} alt={`fish${fishId}`} />
          </FishWrapper>
        )
      case 2:
        return (
          <FishWrapper2>
            <img src={require(`../../assets/images/fish/fish_${fishId}.png`)} alt={`fish${fishId}`} />
            <img src={require(`../../assets/images/fish/fish_${fishId}.png`)} alt={`fish${fishId}`} />
          </FishWrapper2>
        )
      case 3:
        return (
          <FishWrapper3>
            <img src={require(`../../assets/images/fish/fish_${fishId}.png`)} alt={`fish${fishId}`} />
          </FishWrapper3>
        )
      case 4:
        return (
          <FishWrapper4>
            <img src={require(`../../assets/images/fish/fish_${fishId}.png`)} alt={`fish${fishId}`} />
            <Light/>
          </FishWrapper4>
        )
  }
}, []);

  return <>{fish}</>;
});


Fish.propTypes = {
  fishId: PropTypes.number.isRequired
}

Fish.displayName = 'Fish';
export default Fish;