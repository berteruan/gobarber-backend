import { Request, Response } from 'express';
import { container } from 'tsyringe';

// Services
import ListProviderDayAvailabilityService from '@modules/appointments/services/ListProviderDayAvailabilityService';

export default class ProviderDayAvailabilityCotronller {
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { day, month, year } = request.body;

    const listProviderrDayAvailability = container.resolve(
      ListProviderDayAvailabilityService,
    );

    const availability = await listProviderrDayAvailability.execute({
      provider_id,
      day,
      month,
      year,
    });

    return response.json(availability);
  }
}
