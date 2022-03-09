/**
 * Validate Egyptian nationalId
 * @param {number|string} id - nationalId
 * @return {boolean}
 */

function isNationalIdValide(id) {
  let rgx =
    /^[23][4-9][0-9](?:0[1-9]|1[0-2])(?:0[1-9]|[12][0-9]|3[01])(?:01|02|03|04|11|12|13|14|15|16|17|18|19|21|22|23|24|25|26|27|28|29|31|32|33|34|35|88)\d{5}$/;

  const isIdValide = rgx.test(id);
  return isIdValide;
}

isNationalIdValide('29509010109514');
isNationalIdValide(29509010109514);
