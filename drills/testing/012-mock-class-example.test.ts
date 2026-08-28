import { describe, it, expect, vi } from "vitest";


class UserService {

  constructor(
    private emailService: any
  ) {}

  register() {

    return this.emailService.sendEmail("hello");

  }

}

describe("UserService", () => {
    it("call email service", () => {
        //Arrange 
        const mockEmailService = {
            sendEmail: vi.fn().mockReturnValue("sent")
        }
        const userService = new UserService(mockEmailService)

        
        //Act
        const result = userService.register();

        
        //Assert
        expect(mockEmailService.sendEmail).toHaveBeenCalled();
        expect(result).toBe("sent");
    
    })
})