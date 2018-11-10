<template>
  <section class="down-clock">
    <slot :time="time" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      time: {
        year: '0000',
        day: '00',
        hour: '00',
        minute: '00',
        second: '00',
      },
    };
  },

  props: {
    beginning: {
      type: String,
      required: true,
    },
    second: {
      type: Number,
      default: 0,
    },
    minute: {
      type: Number,
      default: 0,
    },
    hour: {
      type: Number,
      default: 0,
    },
    day: {
      type: Number,
      default: 0,
    },
    termination: {
      type: String,
      default: '',
    },
    method: {
      type: String,
      required: true,
    },
  },

  mounted() {},

  methods: {
    down_second() {
      let count = this.second;
      this.timer = setInterval(() => {
        count -= count;
        if (!count) {
          this.$emit('finish');
          this.timer = null;
        }
      }, 1000);
    },
    down_minute(time) {
      const minute = Math.floor((time / 1000 / 60) % 60);
      const second = Math.floor((time / 1000) % 60);
      this.time = Object.assign(
        {},
        { minute: this.leftpad(minute), second: this.leftpad(second) },
      );
    },
    down_hour() {},

    down_day(time) {
      const minute = Math.floor((time / 1000 / 60) % 60);
      const second = Math.floor((time / 1000) % 60);
      const hour = Math.floor((time / 1000 / 60 / 60) % 24);
      const day = Math.floor(time / 1000 / 60 / 60 / 24);

      this.time = Object.assign(
        {},
        {
          day,
          hour: this.leftpad(hour),
          minute: this.leftpad(minute),
          second: this.leftpad(second),
        },
      );
    },

    invoke() {
      switch (this.method) {
        case 'second':
          break;
        // eslint-disable-next-line
        case 'minute':
          const minute = this.minute * 1000 * 60;
          this.universal(minute, this.down_minute);
          break;
        case 'hour':
          break;
        // eslint-disable-next-line
        case 'day':
          const day = this.day * 1000 * 60 * 60 * 24;
          this.universal(day, this.down_day);
          break;
        case 'year':
          break;
        default:
      }
    },

    leftpad(time) {
      if (time >= 10) return time;
      return `0${time}`;
    },

    /**
     *
     * @param time 以毫秒为单位
     * @description 通用倒计时（伪）
     */
    universal(time = 0, callback) {
      let start = Date.parse(new Date());
      if (this.beginning) {
        const temp = this.beginning.replace(/.0$/, '').replace(/-/g, '/');
        start = Date.parse(temp);
      }
      const current = Date.parse(new Date());

      let surplus = start + time - current;

      if (surplus < 0) {
        this.$emit('finish');
        return;
      }

      if (this.timer) {
        clearInterval(this.timer);
      }

      this.timer = setInterval(() => {
        surplus -= 1000;
        callback(surplus);
        if (!surplus) {
          clearInterval(this.timer);
          this.timer = null;
          this.$emit('finish');
        }
      }, 1000);
    },
  },

  watch: {
    beginning() {
      this.invoke();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
