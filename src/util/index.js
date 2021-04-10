export default {
    getBase64: value => (
      new Promise(resolve => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve(reader.result);
        }
        reader.readAsDataURL(value);
      })
    )
  }