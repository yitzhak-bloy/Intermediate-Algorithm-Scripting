const spinalCase = (str) => {

  let str123 = str;
  str123 = str123.replace(/\b \b|_/g, '-');

  str123 = [...str123]

  console.log(str123)
  // console.log(str)
  for (let i = 0; i < str123.length; i++) {
    // console.log(str123[i], 'str');
    // console.log(str123, '999999999999999')
    if (/[A-Z]/.test(str123[i]) && str123[i-1] !== '-' && str123[i-1]) {
      console.log(str123, '7496262156846', str123[i], i)
      // console.log(str123, 'first')

      str123.splice(i, 1, "-" + str123[i])

      console.log(str123, 'secnd')

    }
  }

  const zx = str123.join('')

  console.log(zx, 5555555555555555)
  // const newStr = zx.replace(/\b \b|_/g, '-').toLowerCase();

  // console.log('newStr', newStr )

  return zx.toLowerCase()
}

spinalCase('thisIsSpinalTap');