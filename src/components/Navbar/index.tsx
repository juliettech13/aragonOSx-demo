import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#DCECE1',
    height: '10%',
    paddingLeft: '1%',
    paddingTop: '1%',
    paddingBottom: '1%'
  },
  logo: {
    color: "#366101",
    fontSize: "1.3rem",
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 600,
    textAlign: 'left'
  }
});

export default function NavBar(): JSX.Element {
  return (
    <div className={css(styles.navbar)}>
      <h2 className={css(styles.logo)}>🌳 PARKS DAO</h2>
    </div>
  );
}
