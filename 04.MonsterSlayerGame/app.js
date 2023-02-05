function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data: function () {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      roundNumber: 0,
      canHeal: true,
      winner: null,
      logMessages: [],
    };
  },
  computed: {
    monsterHealthBarStyle() {
      return { width: this.monsterHealth + "%" };
    },
    playerHealthBarStyle() {
      return { width: this.playerHealth + "%" };
    },
    canUseSpecialAttack() {
      return this.roundNumber % 3 !== 0;
    },
  },
  watch: {
    monsterHealth(value) {
      if (value < 0) this.monsterHealth = 0;
      if (value == 0 && this.playerHealth == 0) this.winner = "draw";
      else if (value == 0) this.winner = "player";
    },
    playerHealth(value) {
      if (value < 0) this.playerHealth = 0;
      if (value == 0 && this.monsterHealth == 0) this.winner = "draw";
      else if (value == 0) this.winner = "monster";
    },
  },
  methods: {
    attackMonster() {
      if (this.canUseSpecialAttack) this.roundNumber++;
      let attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.addLogMessage('Player','attack',attackValue);
      this.attackPlayer();
    },
    attackPlayer() {
      let attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
      this.addLogMessage('Monster','attack',attackValue);
    },
    specialAttack() {
      this.roundNumber++;
      let attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.addLogMessage('Player','attack',attackValue);
      this.attackPlayer();
    },
    heal() {
      this.canHeal = false;
      setTimeout(() => {
        this.canHeal = true;
      }, 5000);
      let healthValue = getRandomValue(10, 18);
      this.addLogMessage('Player','heal',healthValue);

      if (this.playerHealth + healthValue > 100) this.playerHealth = 100;
      else this.playerHealth += healthValue;

      this.attackPlayer();
    },
    serrender() {
      this.winner = "monster";
    },
    newGame() {
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.roundNumber = 0;
      this.winner = null;
      this.canHeal = true;
      this.logMessages = [];
    },
    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        who,
        what,
        value,
      });
    },
  },
});

app.mount("#game");
