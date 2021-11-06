import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  Max,
  IsBoolean,
  IsDateString,
} from 'class-validator';

export class UpdateRequestDto {
  @IsNumber()
  Id;

  @IsNumber()
  HotelId: number;

  @IsString()
  @IsNotEmpty()
  GuestRoom: string;

  @IsOptional()
  @IsString()
  GuestName: string;

  @IsOptional()
  @IsString()
  SystemClosedDateTime: string; //optional, null default

  @IsNumber()
  @Min(0)
  @Max(3)
  RequestStateId: number; // if is dif of 1,  SystemClosedDateTime = datetime

  @IsString()
  UserEntryDate: string;

  @IsOptional()
  @IsString()
  GuestCompany: string;

  @IsOptional()
  @IsNumber()
  CreatorUserId: number;

  @IsNumber()
  AssignedUserId: number;

  @IsNumber()
  @Min(0)
  @Max(255)
  RequestTypeId: number;

  //'' default
  @IsOptional()
  @IsString()
  Comments: string;

  //null default
  @IsOptional()
  @IsBoolean()
  AffectedService: boolean;

  //null default
  @IsOptional()
  @IsString()
  UserId: string;

  RoomId: number;

  SystemEntryDate: string;

  @IsOptional()
  @IsDateString()
  RealSolutionDateTime: string;

  @IsOptional()
  @IsNumber()
  GuestRecallCount: number;

  @IsOptional()
  @IsNumber()
  AreaRecallCount: number;

  @IsOptional()
  @IsBoolean()
  IsPeriferic: boolean;

  @IsOptional()
  @IsString()
  PerifericUser: string;
}

/* const room = request.GuestRoom != null ? //?await getRoom(request.HotelId, request.GuestRoom, sql) : {
    roomId: null,
    roomNumber: ''
  };
  const timeZone = //?await getTimeZone(request.HotelId, sql);

  console.log("Room: ", room);
  console.log("timeZone: ", timeZone);
  if (room.roomId == 0) {
    Response.error(callback, 'Unhandled exception in handler');
    return {
      statusCode: 400,
      headers: HEADERS,
      body: JSON.stringify({
        error: "Unhandled exception in handler",
        message: "Room not found"
      })
    }
  }

  request['roomId'] = room.roomId;
  request['room'] = room.roomNumber;
  console.log(['[REQUEST]'], request);
  let dateNow = moment();
  let dateTime = //?dateNow.tz(timeZone).format('YYYY-MM-DDTHH:mm:ss');
  let systemClosedDateTime = null; //!Null default ?
  if (request.RequestStateId != 1) {
    systemClosedDateTime = dateTime;
    request.SystemClosedDateTime = systemClosedDateTime;
  }
  const result = await updateRequest(request, dateTime, sql, timeZone);
  console.log("Request actualizado");
  console.log(dateTime);

  if (result) {
    result_ = request;
  }

} catch (err) {
  return {
    statusCode: 500,
    headers: HEADERS,
    body: JSON.stringify(err)
  }
  //Response.error(callback, 'Unhandled exception in handler', err);
}
//ACTUALIZAR 
return {
  statusCode: 200,
  headers: HEADERS,
  body: JSON.stringify(result_)
}
}; */

/* let updateRequest = async function (request, dateTime, sql, timezone) {
    const userEntryDateObject = getDateFromISO8601(request.UserEntryDate, timezone, 'YYYY-MM-DDTHH:mm:ss');
    const realSolutionDateTimeObject = getDateFromISO8601(request.RealSolutionDateTime, timezone, 'YYYY-MM-DDTHH:mm:ss');
  
    const userEntryDate = userEntryDateObject.format;
    const realSolutionDateTime = realSolutionDateTimeObject.format;
  
  
    if (request.RealSolutionDateTime != undefined) {
      if (request.RequestStateId != 1) {
        await sql.query `UPDATE REQUEST SET SystemClosedDateTime = ${dateTime} where idRequest = ${request.Id};`;
      }
  
      await sql.query `UPDATE INCIDENT SET realSolutionDateTime = ${realSolutionDateTime} where idRequest = ${request.Id};`;
    }
    try {
      const result = await sql.query `UPDATE REQUEST SET
      userEntryDate = ${userEntryDate},
      SystemClosedDateTime = ${request.SystemClosedDateTime || null},
      idAssignedUser = ${request.AssignedUserId}, 
      idRequestType = ${request.RequestTypeId},
      idRequestState = ${request.RequestStateId},
      guestName = ${request.GuestName}, 
      guestRoom = ${request.GuestRoom},
      guestCompany = ${request.GuestCompany},
      idRoom = ${request.roomId}  WHERE idRequest = ${request.Id};`
    } catch (e) {
      console.log(e);
      throw e;
    }
  
   */
