
module.exports = [
    {
        id: "g6-nanode-1",
        label: "Nanode 1GB",
        price: {
            hourly: 0.0075,
            monthly: 5
        },
        addons: {
            backups: {
                price: {
                    hourly: 0.003,
                    monthly: 2
                }
            }
        },
        memory: 1024,
        disk: 25600,
        transfer: 1000,
        vcpus: 1,
        gpus: 0,
        network_out: 1000,
        class: "nanode",
        successor: null
    },
    {
        id: "g6-standard-1",
        label: "Linode 2GB",
        price: {
            hourly: 0.015,
            monthly: 10
        },
        addons: {
            backups: {
                price: {
                    hourly: 0.004,
                    monthly: 2.5
                }
            }
        },
        memory: 2048,
        disk: 51200,
        transfer: 2000,
        vcpus: 1,
        gpus: 0,
        network_out: 2000,
        class: "standard",
        successor: null
    },
    {
        id: "g6-standard-2",
        label: "Linode 4GB",
        price: {
            hourly: 0.03,
            monthly: 20
        },
        addons: {
            backups: {
                price: {
                    hourly: 0.008,
                    monthly: 5
                }
            }
        },
        memory: 4096,
        disk: 81920,
        transfer: 4000,
        vcpus: 2,
        gpus: 0,
        network_out: 4000,
        class: "standard",
        successor: null
    },
    {
        id: "g6-standard-4",
        label: "Linode 8GB",
        price: {
            hourly: 0.06,
            monthly: 40
        },
        addons: {
            backups: {
                price: {
                    hourly: 0.015,
                    monthly: 10
                }
            }
        },
        memory: 8192,
        disk: 163840,
        transfer: 5000,
        vcpus: 4,
        gpus: 0,
        network_out: 5000,
        class: "standard",
        successor: null
    },
    {
        id: "g6-standard-6",
        label: "Linode 16GB",
        price: {
            hourly: 0.12,
            monthly: 80
        },
        addons: {
            backups: {
                price: {
                    hourly: 0.03,
                    monthly: 20
                }
            }
        },
        memory: 16384,
        disk: 327680,
        transfer: 8000,
        vcpus: 6,
        gpus: 0,
        network_out: 6000,
        class: "standard",
        successor: null
    },
    {
        id: "g6-standard-8",
        label: "Linode 32GB",
        price: {
            hourly: 0.24,
            monthly: 160
        },
        addons: {
            backups: {
                price: {
                    hourly: 0.06,
                    monthly: 40
                }
            }
        },
        memory: 32768,
        disk: 655360,
        transfer: 16000,
        vcpus: 8,
        gpus: 0,
        network_out: 7000,
        class: "standard",
        successor: null
    },
    {
        id: "g6-standard-16",
        label: "Linode 64GB",
        price: {
            hourly: 0.48,
            monthly: 320
        },
        addons: {
            backups: {
                price: {
                    hourly: 0.12,
                    monthly: 80
                }
            }
        },
        memory: 65536,
        disk: 1310720,
        transfer: 20000,
        vcpus: 16,
        gpus: 0,
        network_out: 9000,
        class: "standard",
        successor: null
    },
    {
        id: "g6-standard-20",
        label: "Linode 96GB",
        price: {
            hourly: 0.72,
            monthly: 480
        },
        addons: {
            backups: {
                price: {
                    hourly: 0.18,
                    monthly: 120
                }
            }
        },
        memory: 98304,
        disk: 1966080,
        transfer: 20000,
        vcpus: 20,
        gpus: 0,
        network_out: 10000,
        class: "standard",
        successor: null
    },
    {
        id: "g6-standard-24",
        label: "Linode 128GB",
        price: {
            hourly: 0.96,
            monthly: 640
        },
        addons: {
            backups: {
                price: {
                    hourly: 0.24,
                    monthly: 160
                }
            }
        },
        memory: 131072,
        disk: 2621440,
        transfer: 20000,
        vcpus: 24,
        gpus: 0,
        network_out: 11000,
        class: "standard",
        successor: null
    },
    {
        id: "g6-standard-32",
        label: "Linode 192GB",
        price: {
            hourly: 1.44,
            monthly: 960
        },
        addons: {
            backups: {
                price: {
                    hourly: 0.36,
                    monthly: 240
                }
            }
        },
        memory: 196608,
        disk: 3932160,
        transfer: 20000,
        vcpus: 32,
        gpus: 0,
        network_out: 12000,
        class: "standard",
        successor: null
    },
    {
        id: "g7-highmem-1",
        label: "Linode 24GB",
        price: {
            hourly: 0.09,
            monthly: 60
        },
        addons: {
            backups: {
                price: {
                    hourly: 0.0075,
                    monthly: 5
                }
            }
        },
        memory: 24576,
        disk: 20480,
        transfer: 5000,
        vcpus: 2,
        gpus: 0,
        network_out: 5000,
        class: "highmem",
        successor: null
    },
    {
        id: "g7-highmem-2",
        label: "Linode 48GB",
        price: {
            hourly: 0.18,
            monthly: 120
        },
        addons: {
            backups: {
                price: {
                    hourly: 0.015,
                    monthly: 10
                }
            }
        },
        memory: 49152,
        disk: 40960,
        transfer: 6000,
        vcpus: 2,
        gpus: 0,
        network_out: 6000,
        class: "highmem",
        successor: null
    },
    {
        id: "g7-highmem-4",
        label: "Linode 90GB",
        price: {
            hourly: 0.36,
            monthly: 240
        },
        addons: {
            backups: {
                price: {
                    hourly: 0.03,
                    monthly: 20
                }
            }
        },
        memory: 92160,
        disk: 92160,
        transfer: 7000,
        vcpus: 4,
        gpus: 0,
        network_out: 7000,
        class: "highmem",
        successor: null
    },
    {
        id: "g7-highmem-8",
        label: "Linode 150GB",
        price: {
            hourly: 0.72,
            monthly: 480
        },
        addons: {
            backups: {
                price: {
                    hourly: 0.06,
                    monthly: 40
                }
            }
        },
        memory: 153600,
        disk: 204800,
        transfer: 8000,
        vcpus: 8,
        gpus: 0,
        network_out: 8000,
        class: "highmem",
        successor: null
    },
    {
        id: "g7-highmem-16",
        label: "Linode 300GB",
        price: {
            hourly: 1.44,
            monthly: 960
        },
        addons: {
            backups: {
                price: {
                    hourly: 0.12,
                    monthly: 80
                }
            }
        },
        memory: 307200,
        disk: 348160,
        transfer: 9000,
        vcpus: 16,
        gpus: 0,
        network_out: 9000,
        class: "highmem",
        successor: null
    },
    {
        id: "g6-dedicated-2",
        label: "Dedicated 4GB",
        price: {
            hourly: 0.045,
            monthly: 30
        },
        addons: {
            backups: {
                price: {
                    hourly: 0.008,
                    monthly: 5
                }
            }
        },
        memory: 4096,
        disk: 81920,
        transfer: 4000,
        vcpus: 2,
        gpus: 0,
        network_out: 4000,
        class: "dedicated",
        successor: null
    },
    {
        id: "g6-dedicated-4",
        label: "Dedicated 8GB",
        price: {
            hourly: 0.09,
            monthly: 60
        },
        addons: {
            backups: {
                price: {
                    hourly: 0.015,
                    monthly: 10
                }
            }
        },
        memory: 8192,
        disk: 163840,
        transfer: 5000,
        vcpus: 4,
        gpus: 0,
        network_out: 5000,
        class: "dedicated",
        successor: null
    },
    {
        id: "g6-dedicated-8",
        label: "Dedicated 16GB",
        price: {
            hourly: 0.18,
            monthly: 120
        },
        addons: {
            backups: {
                price: {
                    hourly: 0.03,
                    monthly: 20
                }
            }
        },
        memory: 16384,
        disk: 327680,
        transfer: 6000,
        vcpus: 8,
        gpus: 0,
        network_out: 6000,
        class: "dedicated",
        successor: null
    },
    {
        id: "g6-dedicated-16",
        label: "Dedicated 32GB",
        price: {
            hourly: 0.36,
            monthly: 240
        },
        addons: {
            backups: {
                price: {
                    hourly: 0.06,
                    monthly: 40
                }
            }
        },
        memory: 32768,
        disk: 655360,
        transfer: 7000,
        vcpus: 16,
        gpus: 0,
        network_out: 7000,
        class: "dedicated",
        successor: null
    },
    {
        id: "g6-dedicated-32",
        label: "Dedicated 64GB",
        price: {
            hourly: 0.72,
            monthly: 480
        },
        addons: {
            backups: {
                price: {
                    hourly: 0.12,
                    monthly: 80
                }
            }
        },
        memory: 65536,
        disk: 1310720,
        transfer: 8000,
        vcpus: 32,
        gpus: 0,
        network_out: 8000,
        class: "dedicated",
        successor: null
    },
    {
        id: "g6-dedicated-48",
        label: "Dedicated 96GB",
        price: {
            hourly: 1.08,
            monthly: 720
        },
        addons: {
            backups: {
                price: {
                    hourly: 0.18,
                    monthly: 120
                }
            }
        },
        memory: 98304,
        disk: 1966080,
        transfer: 9000,
        vcpus: 48,
        gpus: 0,
        network_out: 9000,
        class: "dedicated",
        successor: null
    },
    {
        id: "g6-dedicated-50",
        label: "Dedicated 128GB",
        price: {
            hourly: 1.44,
            monthly: 960
        },
        addons: {
            backups: {
                price: {
                    hourly: 0.24,
                    monthly: 160
                }
            }
        },
        memory: 131072,
        disk: 2560000,
        transfer: 10000,
        vcpus: 50,
        gpus: 0,
        network_out: 10000,
        class: "dedicated",
        successor: null
    },
    {
        id: "g6-dedicated-56",
        label: "Dedicated 256GB",
        price: {
            hourly: 2.88,
            monthly: 1920
        },
        addons: {
            backups: {
                price: {
                    hourly: 0.3,
                    monthly: 200
                }
            }
        },
        memory: 262144,
        disk: 5120000,
        transfer: 11000,
        vcpus: 56,
        gpus: 0,
        network_out: 11000,
        class: "dedicated",
        successor: null
    },
    {
        id: "g6-dedicated-64",
        label: "Dedicated 512GB",
        price: {
            hourly: 5.76,
            monthly: 3840
        },
        addons: {
            backups: {
                price: {
                    hourly: 0.36,
                    monthly: 240
                }
            }
        },
        memory: 524288,
        disk: 7372800,
        transfer: 12000,
        vcpus: 64,
        gpus: 0,
        network_out: 12000,
        class: "dedicated",
        successor: null
    },
    {
        id: "g1-gpu-rtx6000-1",
        label: "Dedicated 32GB + RTX6000 GPU x1",
        price: {
            hourly: 1.5,
            monthly: 1000
        },
        addons: {
            backups: {
                price: {
                    hourly: 0.06,
                    monthly: 40
                }
            }
        },
        memory: 32768,
        disk: 655360,
        transfer: 16000,
        vcpus: 8,
        gpus: 1,
        network_out: 10000,
        class: "gpu",
        successor: null
    },
    {
        id: "g1-gpu-rtx6000-2",
        label: "Dedicated 64GB + RTX6000 GPU x2",
        price: {
            hourly: 3,
            monthly: 2000
        },
        addons: {
            backups: {
                price: {
                    hourly: 0.12,
                    monthly: 80
                }
            }
        },
        memory: 65536,
        disk: 1310720,
        transfer: 20000,
        vcpus: 16,
        gpus: 2,
        network_out: 10000,
        class: "gpu",
        successor: null
    },
    {
        id: "g1-gpu-rtx6000-3",
        label: "Dedicated 96GB + RTX6000 GPU x3",
        price: {
            hourly: 4.5,
            monthly: 3000
        },
        addons: {
            backups: {
                price: {
                    hourly: 0.18,
                    monthly: 120
                }
            }
        },
        memory: 98304,
        disk: 1966080,
        transfer: 20000,
        vcpus: 20,
        gpus: 3,
        network_out: 10000,
        class: "gpu",
        successor: null
    },
    {
        id: "g1-gpu-rtx6000-4",
        label: "Dedicated 128GB + RTX6000 GPU x4",
        price: {
            hourly: 6,
            monthly: 4000
        },
        addons: {
            backups: {
                price: {
                    hourly: 0.24,
                    monthly: 160
                }
            }
        },
        memory: 131072,
        disk: 2621440,
        transfer: 20000,
        vcpus: 24,
        gpus: 4,
        network_out: 10000,
        class: "gpu",
        successor: null
    }
]