import styles from './Rules.module.css'
import { Route, Switch, Link } from 'react-router-dom';

const Rules = (props) => {
    return (
        <div className={styles.rulesContainer}>
            <div className={styles.rules1}>
                <p> Players and Cards:</p>
                <p>In its current state, this game is played with 2 players. While Scopa may traditionally be played with 4 or 6 players, it is more interesting then to play Scopone.</p>
                <p>A 40-card pack is used. When playing with traditional 52-pack cards, the 8's, 9's, and 10's are removed. For the purposes of capturing, the cards have values as follows:</p>
                <br />
                <p>King: 10</p>
                <p>Jack: 9</p>
                <p>Queen: 8</p>
                <p>7-2: face value</p>
                <p>Ace: 1</p>
                <br />
                <br />
                <p>Deal:</p>
                <p>Player 1 (top of the screen) and Player 2 (bottom of the screen) are dealt 3 cards each. Then, 4 cards are laid face-up in the middle</p>
            </div>
            <div className={styles.rules2}>
                <p>Play:</p>
                <p>Player 1 goes first and then the turns alternate. A turn consists of playing exactly one card from the player's hand. The played card may do one of two things:</p>
                <p>Capture: The player's card may capture one or more of the center cards so long as the value of the center card(s) matches the player's card. All cards involved in the capture are moved to the player's pile</p>
                <p>Discard: The player may put their card face up in the center with the others.</p>
                <p>Once each player has played all three of their cards, they are dealt new cards from the deck. Turns continue until the deck is empty and the round concludes. When this happens, any leftover cards in the center are captured by the player who last performed a capture.</p>
            </div>
            <div className={styles.rules2}>
                <p>Scoring:</p>
                <p>At the end of a round, points are allotted to players based on the cards they captured:</p>
                <p>Cards Point: point given to the player with the most captured cards</p>
                <p>Diamonds Point: point given to the player with the most captured diamonds</p>
                <p>Sevens Point: point given to the player with the most captured sevens</p>
                <p>Settebello: point given to the player who captured the seven of diamonds</p>
                <p>When players tie on captured diamonds, cards, or sevens, then these points are not allotted on that round.</p>
                <p>The first player to reach 11 cumulative points wins the game. On a tie, round continue until one concludes with one player on top.</p>
            </div>
            <div className={styles.rules2}>
                <p>Instructions:</p>
                <p>On your turn, click any one card from your hand. You may only select one card from your hand at a time.</p>
                <p>Once you select a card from your hand, your Siscard button becomes active. You may click discard to place your card in the center, or you may select multiple center cards.</p>
                <p>If the sum of center card values matches your card value, your Play Card button becomes active. Click it to capture those cards.</p>
                <p>To cancel selections, click your selected card.</p>
            </div>
            <Link className={styles.backbtn} to='/'>Go Back</Link>
        </div>
    )
}

export default Rules