export class LoggingService {
    messageStatus(messStatus: string) {
        console.log('A server status changed, new status: ' + messStatus)
    }
}