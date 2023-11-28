//src/prisma-client-exception.filter.ts

import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Prisma } from '@prisma/client';
import { Response } from 'express';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaClientExceptionFilter extends BaseExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    console.error(exception.message);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const message = exception.message.replace(/\n/g, '');

    switch (exception.code) {
      case 'P2002': {
        const status = HttpStatus.CONFLICT;
        response.status(status).json({
          error: 'Conflict',
          statusCode: status,
          message: message,
        });
        break;
      }

      case 'P2025': {
        const status = HttpStatus.NOT_FOUND;
        response.status(status).json({
          error: 'Not Found',
          statusCode: status,
          message: message,
        });
        break;
      }

      case 'P2003': {
        // Unique constraint failed
        const status = HttpStatus.BAD_REQUEST;
        response.status(status).json({
          error: 'Bad Request',
          statusCode: status,
          message: exception.meta
            ? `Invalid foreign key constraint on '${exception.meta.field_name}'`
            : message,
        });
        break;
      }

      default:
        // default 500 error code
        super.catch(exception, host);
        break;
    }
  }
}
