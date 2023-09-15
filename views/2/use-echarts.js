const { ref, watch, shallowRef } = Vue;
const useEcharts = () => {
  const domRef = ref(null);
  const chart = shallowRef(null);

  const setOption = async (option) => {
    if (!domRef.value) {
      chart.value = echarts.init(domRef.value);
      await new Promise((res) => watch(() => domRef.value, res));
    }

    chart.value.setOption(option);
  };

  return { domRef, setOption };
};

export { useEcharts };
