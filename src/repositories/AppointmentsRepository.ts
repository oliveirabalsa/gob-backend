import { Repository } from 'typeorm';
import Appointment from '../models/Appointment.model';

class AppointmentsRepository {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private readonly appointmentRepository: Repository<Appointment>,
  ) {}

  // private appointments: Appointment[];

  public async all(): Promise<Appointment[]> {
    return this.appointmentRepository.find();
  }

  public async findByDate(date: Date): Promise<Appointment> {
    const appointments: any = await this.appointmentRepository.find({
      where: { date },
    });
    return appointments;
  }

  public async create({ provider_id, date }: Appointment): Promise<void> {
    const createAppointment = this.appointmentRepository.create({
      provider_id,
      date,
    });

    await this.appointmentRepository.save(createAppointment);
  }
}

export default AppointmentsRepository;
