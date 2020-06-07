import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-materialize'

const Link = ({ active, children, setVisibilityFilter, filter }) => (
  <Button
    onClick={() => setVisibilityFilter(filter)}
    disabled={active}
    style={{
      marginLeft: '4px'
    }}
  >
    {children}
  </Button>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  setVisibilityFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired
}

export default Link
