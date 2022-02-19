import React, { useEffect, useState } from 'react'
import LogoHeader from '../components/logoHeader';
import TicketEntryButton from '../components/entryButton';

const Header = (props) => {
    return (
      <div>
        <LogoHeader/>
        <TicketEntryButton/>
      </div>
    )
}

export default Header;