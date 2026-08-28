import {describe, it, vi, expect} from 'vitest';

class NotificationService {
  constructor(private sender: any) {}

  sendNotification() {
    return this.sender.send();
  }
}

describe("NotificationService", () => {
    it("should mock sender and see sendNotofication works?" , () => {
        //Arrange 

        const mockSender = {
            send: vi.fn().mockReturnValue("sent")
        }
        const notificationService = new NotificationService(mockSender)

        //Act

        const notificationStatus = notificationService.sendNotification();

        //Assert

        expect(mockSender.send).toHaveBeenCalled(); 
        //mistake was => expect(mockSender.send()).toHaveBeenCalled();
        expect(notificationStatus).toBe("sent");

        // expect()
    })
})