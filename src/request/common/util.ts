import * as moment from 'moment-timezone';
import * as db from '../database/models/user.model';
/**
 *
 * @param {*} page
 * @param {*} size
 * @returns
 */
export const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;
  return {
    limit,
    offset,
  };
};

export const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: items } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return {
    totalItems,
    items,
    totalPages,
    currentPage,
  };
};
/**
 *
 * @param {*} minutes
 * @returns
 */
export const getDateNowFormat = (minutes) => {
  //timezone por defecto
  const timeZone = 'America/Bogota';
  const dateNow = moment();
  console.log('[NOW] ', dateNow.toString());
  const dateTime = dateNow.tz(timeZone).format('YYYY-MM-DDTHH:mm:ss');
  console.log('[AFTER ADD ]', dateTime);
  //parseamos la fecha para manejo con moment.js
  const _date = moment(dateTime).add(parseInt(minutes), 'minutes');
  console.log('[HORA ENVIO] ', _date.format('YYYY-MM-DDTHH:mm:ss'));

  return _date.format('YYYY-MM-DDTHH:mm:ss');
};
/**
 *
 * @param {*} order
 * @param {*} _default
 * @returns
 */
export const getOrder = (order, _default) => {
  console.log(order);
  if (order == null || order == undefined) {
    return _default;
  }
  //~//"UserEntryDate-DESC"

  const orderToArray = order.split('~');
  console.log(orderToArray);
  const resultToArray = [];
  orderToArray.forEach((element) => {
    let elements = element.split('-');
    if (elements.length == 2) {
      const fields = elements[0].split('.');
      if (fields.length == 2) {
        if (fields[0] == 'AssignedUser' || fields[0] == 'CreatorUser') {
          //[{model: Task, as: 'Task'}, 'createdAt', 'DESC']
          elements = [
            {
              model: db,
              as: fields[0],
            },
            fields[1],
            elements[1],
          ];
        } else {
          elements = [fields[0], fields[1], elements[1]];
        }
      }
      console.log(elements);
      resultToArray.push(elements);
    }
  });

  console.log(resultToArray);

  return resultToArray;
};
/**
 *
 * @param {*} isostr
 * @param {*} timezone
 * @param {*} format
 * @returns
 */
export const getDateFromISO8601 = (isostr, timezone, format) => {
  if (moment(isostr, 'YYYY-MM-DD', true).isValid()) {
    isostr = isostr + 'T15:18:25.141Z';
  }
  const parts = isostr.match(/\d+/g);
  const momentObject = moment.tz(
    [parts[0], parts[1] - 1, parts[2], parts[3], parts[4], parts[5]],
    timezone,
  );

  return {
    dateObject: new Date(
      parts[0],
      parts[1] - 1,
      parts[2],
      parts[3],
      parts[4],
      parts[5],
    ),
    dateArray: parts,
    moment: momentObject,
    format: momentObject.format(format),
  };
};
