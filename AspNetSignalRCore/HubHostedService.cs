using AspNetSignalRCore.Hubs;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace AspNetSignalRCore
{
    public class HubHostedService : IHostedService
    {
        private readonly IHubContext<CodeHub> _testHub;

        public HubHostedService(IHubContext<CodeHub> testHub)
        {
            _testHub = testHub;
        }
        public Task StartAsync(CancellationToken cancellationToken)
        {
            return Task.CompletedTask;
        }

        public Task StopAsync(CancellationToken cancellationToken)
        {
            return Task.CompletedTask;
        }
    }
}
