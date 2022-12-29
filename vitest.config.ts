import vue2 from '@vitejs/plugin-vue2'

export default {
  plugins: [vue2()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
}
