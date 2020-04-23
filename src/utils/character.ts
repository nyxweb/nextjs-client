export const getClassImage = (Class: number) => {
  switch (Class) {
    case 0:
    case 1:
    case 2:
      return '/images/classes/sm.gif';
    case 16:
    case 17:
    case 18:
      return '/images/classes/bk.gif';
    case 32:
    case 33:
    case 34:
      return '/images/classes/elf.gif';
    case 48:
    case 49:
      return '/images/classes/mg.gif';
    case 64:
    case 65:
      return '/images/classes/dl.gif';
    default:
      return '/images/classes/unknown.png';
  }
};
