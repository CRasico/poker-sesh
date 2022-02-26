# session-manager

## Jobs
- Start New Session
- Invite Friends
- Initiate Game Creation/Start Game
- Initiate Chat Creation

### Tips

- Quick Health Check Command if Server Started:
    - `grpcurl -proto protocol-buffers/health.proto -plaintext -d '{"service": "super duper complex"}' localhost:50051 grpc.health.v1.Health/Check`